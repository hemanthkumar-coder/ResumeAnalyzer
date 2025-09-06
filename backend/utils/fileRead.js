const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");
const filePath = path.join(__dirname, "files/T HEMANTH KUMAR RESUME.pdf");
console.log(filePath);

async function extractPdf(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.log("Error reading file", error);
  }
}
module.exports = extractPdf;

