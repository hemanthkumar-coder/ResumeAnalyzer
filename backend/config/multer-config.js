const multer = require("multer");
const path = require("path");
const { nanoid } = require("nanoid");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save in uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, nanoid(10) + file.originalname); // unique filename
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
