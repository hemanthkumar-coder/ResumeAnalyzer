const { Router } = require("express");
const upload = require("../config/multer-config");
const {
  UploadAndAnalyzeResume,
  getResumesData,
  getResumeData,
} = require("../controller/resume-controllers");

const router = Router();

router.post("/analyze", upload.single("resume"), UploadAndAnalyzeResume);
router.get("/resumes", getResumesData);
router.get("/resumes/:id", getResumeData);

// console.log("C:\Users\hem12\OneDrive\Documents\vs code\ResumeAnalyzer\backend\routes");

module.exports = router;
