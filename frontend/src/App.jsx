import "./App.css";
import { useEffect, useState } from "react";
import status from "./utils/api-responses";
import FileInput from "./components/FileInput";
import { BounceLoader } from "react-spinners";
import FeedbackModal from "./components/Modal";
import ResumesTable from "./components/ResumesTable";

function App() {
  const [apiResponse, setApiResponse] = useState(status.INITIAL);
  const [feedback, setFeedback] = useState({});
  const [resumes, setResumes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const onChangeApiResponse = (apiStatus) => {
    setApiResponse(apiStatus);
    if (apiStatus === status.SUCCESS) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    async function getResumes() {
      const url = "http://localhost:3000/resumes";
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const resumesList = await response.json();
      setResumes(resumesList.data);
    }
    getResumes();
  }, [feedback]);

  const onSetFeedback = (responseFeedback) => {
    setFeedback(responseFeedback);
  };
  const renderLoader = () => {
    return (
      <div className="bg-transparent flex flex-col justify-center items-center h-screen w-screen z-1 absolute">
        <BounceLoader size={150} color="#778cda" />
        <p className="text-blue-400 text-6xl font-bold">Analyzing</p>
      </div>
    );
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const renderModal = () => {
    return (
      <FeedbackModal
        isModelOpen={modalIsOpen}
        onCloseModel={closeModal}
        feedbackDetails={feedback}
      />
    );
  };
  return (
    <div className="bg-slate-50 min-h-screen h-full p-6 flex flex-col gap-4 items-center">
      <span className="text-blue-500 text-5xl font-bold">
        Resume<span className="text-blue-400">Analyzer</span>
      </span>
      <FileInput
        onChangeApiResponse={onChangeApiResponse}
        onSetFeedback={onSetFeedback}
      />
      {apiResponse === status.PENDING ? renderLoader() : null}
      {modalIsOpen ? renderModal() : ""}
      <h1 className="text-xl text-blue-400 font-bold">Resume History</h1>
      <ResumesTable resumes={resumes}></ResumesTable>
    </div>
  );
}

export default App;
