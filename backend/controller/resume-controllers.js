const path = require("path");
const extractPdf = require("../utils/fileRead");
const analyzeResume = require("../utils/sendReqToLLM");
const { insertResume, getResumes, getResume } = require("../utils/db-utils");

async function UploadAndAnalyzeResume(req, res) {
  try {
    // console.log(req.file.filename);
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "No file uploaded",
      });
    }
    const filePath = path.join(global.UPLOADS_DIR, req.file.filename);
    const resumeData = await extractPdf(filePath);
    const responseFromModel = await analyzeResume(resumeData);
    const feedback = await JSON.parse(responseFromModel);
    insertResume({
      name: feedback.personal_details.name,
      email: feedback.personal_details.email,
      file_name: req.file.filename.slice(10),
      feedback: feedback,
    });
    res.status(200).json({
      success: true,
      message: "Successfully Received feedback from model",
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
}

async function getResumesData(req, res) {
  try {
    const resumes = await getResumes();
    if (resumes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Resumes Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully Retrieved Resumes",
      data: resumes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
      error,
    });
  }
}

async function getResumeData(req, res) {
  try {
    const resume = await getResume(req.params.id);
    if (resume.length <= 0) {
      return res.status(404).json({
        success: false,
        message: `No Resume Found with id ${req.params.id}`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Resume Retrived",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
      error,
    });
  }
}

module.exports = {
  UploadAndAnalyzeResume,
  getResumesData,
  getResumeData,
};
