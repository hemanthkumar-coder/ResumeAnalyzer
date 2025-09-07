import { useState } from "react";
import Modal from "../Modal";

function ResumeDetails({ details }) {
  const [isModelOpen, setModelOpen] = useState(false);
  const [resume, setResumeData] = useState({});
  const onClickFeedback = async () => {
    try {
      const url = `http://localhost:3000/resumes/${details.resume_id}`;
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const resumeobj = await response.json();
      const resumeObject = resumeobj.resume[0];
      setResumeData(resumeObject);
      setModelOpen(true);
    } catch (error) {}
  };
  const closeModal = () => {
    setModelOpen(false);
  };
  return (
    <li className="flex justify-between items-center p-2 gap-4 ">
      {isModelOpen ? (
        <Modal
          isModelOpen={isModelOpen}
          feedbackDetails={resume}
          onCloseModel={closeModal}
        />
      ) : (
        ""
      )}
      <span className="text-blue-700">{details.name}</span>
      <span className="text-blue-700">{details.email}</span>
      <button
        onClick={onClickFeedback}
        className="text-blue-700 cursor-pointer"
      >
        Details
      </button>
    </li>
  );
}

export default ResumeDetails;
