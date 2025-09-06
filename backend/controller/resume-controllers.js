const path = require("path");
const extractPdf = require("../utils/fileRead");
const analyzeResume = require("../utils/sendReqToLLM");
const { insertResume } = require("../utils/db-utils");

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

module.exports = {
  UploadAndAnalyzeResume,
};
