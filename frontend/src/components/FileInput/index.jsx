import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import status from "../../utils/api-responses.js";

function FileInput({ onChangeApiResponse }) {
  const [file, setFile] = useState({});

  const [err, setErr] = useState("");
  const onFileUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const onClickAnalyze = async () => {
    try {
      onChangeApiResponse(status.PENDING);
      const formData = new FormData();
      formData.set("resume", file);
      const options = {
        method: "POST",
        body: formData,
      };
      const url = "http://localhost:3000/analyze";
      const response = await fetch(url, options);
      const feedback = await response.json();
      if (!feedback.success) {
        setErr(feedback.error);
      }
      console.log(feedback);
      setFile({});
      onChangeApiResponse(status.SUCCESS);
    } catch (error) {
      setErr("Something Went Wrong");
      onChangeApiResponse(status.FAILED);
    }
  };
  return (
    <>
      <div className="shadow-2xl">
        <input
          onChange={onFileUpload}
          className="hidden"
          type="file"
          id="fileInput"
        />
        <label
          className="h-50 w-75 flex flex-col justify-center items-center text-lg text-blue-400 text-center rounded-lg border-2 border-solid border-blue-400"
          htmlFor="fileInput"
        >
          <IoMdCloudUpload className="text-6xl text-blue-400" />
          {file.name ? file.name : "Upload Resume"}
        </label>
      </div>
      <button
        onClick={onClickAnalyze}
        className="bg-blue-400 text-xl px-4 py-2 rounded-xl shadow-xl cursor-pointer text-white font-bold"
      >
        Analyze
      </button>
      <p className="text-red-500 font-bold text-2lg">{err ? err : ""}</p>
    </>
  );
}

export default FileInput;
