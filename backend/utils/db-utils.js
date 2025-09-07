const { sql } = require("../config/db");

async function insertResume(data) {
  try {
    const resume = await sql`
        INSERT INTO resumes(name,email,file_name,feedback)
        VALUES (${data.name},${data.email},${data.file_name},${data.feedback})
        `;
    // console.log(resume);
  } catch (error) {
    throw error;
  }
}

async function getResumes() {
  try {
    const resumes = await sql`
      select * from resumes;
    `;
    return resumes;
  } catch (error) {
    throw error;
  }
}

async function getResume(id) {
  try {
    const resume = await sql`
    select * from resumes where resume_id=${id}
    `;
    return resume;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insertResume,
  getResumes,
  getResume,
};
