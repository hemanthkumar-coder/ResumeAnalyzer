import "./App.css";
import { useState } from "react";
import status from "./utils/api-responses";
import FileInput from "./components/FileInput";
import { BounceLoader } from "react-spinners";
import FeedbackModal from "./components/Modal";

function App() {
  const [apiResponse, setApiResponse] = useState(status.INITIAL);
  const [feedback, setFeedback] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const onChangeApiResponse = (apiStatus) => {
    setApiResponse(apiStatus);
    if (apiStatus === status.SUCCESS) {
      setIsOpen(true);
    }
  };

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
    <div className="bg-slate-50 h-screen p-6 flex flex-col gap-4 items-center">
      <span className="text-blue-500 text-5xl font-bold">
        Resume<span className="text-blue-400">Analyzer</span>
      </span>
      <FileInput
        onChangeApiResponse={onChangeApiResponse}
        onSetFeedback={onSetFeedback}
      />
      {apiResponse === status.PENDING ? renderLoader() : null}
      {modalIsOpen ? renderModal() : ""}
    </div>
  );
}

export default App;
