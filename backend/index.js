const express = require("express");
const router = require("./routes/resume-routes");
const { createResumeTable } = require("./config/db");
const path = require("path");
require("dotenv").config();
global.UPLOADS_DIR = path.resolve("uploads");

const app = express();
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running on PORT 3000");
  createResumeTable();
});
