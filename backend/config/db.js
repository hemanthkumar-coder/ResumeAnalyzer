const postgres = require("postgres");
require("dotenv").config();
const sql = postgres(
  `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
);

async function createResumeTable() {
  try {
    await sql`
        CREATE TABLE  IF NOT EXISTS resumes
        (
            resume_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            file_name VARCHAR(50) NOT NULL,
            feedback JSONB
        )
        `;
    console.log("table Created Successfully");
  } catch (error) {
    console.error("Errror Creating table", error);
  }
}

module.exports = { createResumeTable, sql };
