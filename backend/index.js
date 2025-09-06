const express = require("express");
const router = require("./routes/resume-routes");
const { createResumeTable } = require("./config/db");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
global.UPLOADS_DIR = path.resolve("uploads");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running on PORT 3000");
  createResumeTable();
});
