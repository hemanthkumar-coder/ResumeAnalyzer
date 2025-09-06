const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeResume(resumeData) {
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });
    const prompt = `
  Resume Data: ${resumeData}
You are an AI Resume Analyzer and provided with above resume data. 
Your task is to extract information from the provided resume text and generate AI-driven feedback. 
Always respond ONLY in valid JSON with the following structure:

{
  "personal_details": {
    "name": "<full name>",
    "email": "<email address>",
    "phone": "<phone number>",
    "links": ["<LinkedIn or portfolio URLs>"]
  },
  "resume_content": {
    "summary_or_objective": "<career summary or objective>",
    "work_experience": ["<list of job experiences with role, company, dates, achievements>"],
    "education": ["<list of degrees, institutions, dates>"],
    "projects": ["<list of projects with short descriptions>"],
    "certifications": ["<list of certifications if available>"]
  },
  "skills": {
    "technical_skills": ["<list of technical skills>"],
    "soft_skills": ["<list of soft skills>"]
  },
  "ai_generated_feedback": {
    "resume_rating": "<number between 1 and 10>",
    "improvement_areas": ["<list of improvements needed>"],
    "suggested_skills": ["<list of new skills relevant to user's profile>"]
  }
}

Rules:
- Do not include extra commentary outside JSON.
- If a section is missing in the resume, return an empty array or null for that field.
- Keep responses professional, concise, and structured.
- Ensure output is always valid JSON.

`;
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
}

module.exports = analyzeResume;
