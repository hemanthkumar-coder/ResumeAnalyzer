import { useEffect, useState } from "react";
import ResumeDetails from "../ResumeDetails";
function ResumesTable({ resumes }) {
  return (
    <ul className="w-200 border-blue-300 border-2 shadow-blue-300 shadow-xl rounded-md">
      <li className="flex justify-between items-center p-2 gap-4 ">
        <span className="text-blue-700">Name</span>
        <span className="text-blue-700">Email</span>
        <span className="text-blue-700">Analysis</span>
      </li>
      {resumes?.map((each) => (
        <ResumeDetails key={each.resume_id} details={each}></ResumeDetails>
      ))}
    </ul>
  );
}

export default ResumesTable;
