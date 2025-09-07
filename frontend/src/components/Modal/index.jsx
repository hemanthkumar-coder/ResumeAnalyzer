import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");
function FeedbackModal({ isModelOpen, onCloseModel, feedbackDetails }) {
  const { feedback } = feedbackDetails;
  // console.log(feedbackDetails,"in Modal Comp")
  //
  //   const feedback = {
  //     personal_details: {
  //       name: "T Hemanth Kumar",
  //       email: "hemanthkumarthiruvaipati@gmail.com",
  //       phone: "+91 9121822990",
  //       links: ["Github", "LinkedIn"],
  //     },
  //     resume_content: {
  //       summary_or_objective:
  //         "Full Stack Developer with strong expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and a solid foundation in building scalable, user-focused web applications. Skilled in designing responsive UIs, developing secure and efficient backend services, and integrating databases to deliver complete end-to-end solutions. Hands-on experience with modern frontend frameworks, RESTful APIs, authentication, and real-time features. Adept at problem-solving, writing clean and maintainable code, and collaborating in agile environments to deliver high-quality software solutions.",
  //       work_experience: [],
  //       education: [
  //         "Industry Ready Certificate in Full Stack Development, NXTWAVE DISRUPTIVE TECHNOLOGIES, 2022-2026",
  //         "B.Tech(Bachelor of Technology) Electronics and Communication Engineering, Sri Venkateswara College of Engineering (SVCE), Autonomous – Tirupati, 2021-2025, 8.33CGPA",
  //         "Intermediate MPC, Narayana Junior College, Tirupati, 2019-2021, 94%",
  //         "Secondary School of Certificate, Ratnam High School, Tirupati, 2018-2019, 9.8CGPA",
  //       ],
  //       projects: [
  //         "CureNest HealthCare Booking App: Built a responsive healthcare appointment booking web app using React and modern frontend technologies. Enabled users to search, schedule, and manage medical appointments with an intuitive user interface. Integrated secure authentication and real-time booking features to enhance patient and provider experience.",
  //         "A Basic Url Shortener Using Nodejs: Developed a full-stack URL Shortener using Node.js, Express, and MongoDB, enabling users to generate and manage short links. Implemented analytics tracking to monitor URL visits and provide detailed usage statistics. Designed RESTful APIs for URL creation, redirection, and analytics retrieval, ensuring robust error handling and scalability.",
  //       ],
  //       certifications: [],
  //     },
  //     skills: {
  //       technical_skills: [
  //         "HTML",
  //         "CSS",
  //         "Bootstrap",
  //         "Tailwind",
  //         "Express.js",
  //         "Node.js",
  //         "SQL",
  //         "MongoDB",
  //         "Python",
  //         "Java",
  //         "JavaScript",
  //       ],
  //       soft_skills: ["Problem-Solving", "Team-Collaboration", "Communication"],
  //     },
  //     ai_generated_feedback: {
  //       resume_rating: "7",
  //       improvement_areas: [
  //         "Include direct URLs for your Github and LinkedIn profiles in the personal details section.",
  //         "Quantify achievements and impact in project descriptions (e.g., 'improved X by Y%', 'handled Z users/requests').",
  //         "Consider adding a 'Work Experience' section for any internships, part-time roles, or significant academic projects that mimic professional experience.",
  //         "Elaborate on specific technologies or tools used within your projects beyond just the main stack (e.g., specific libraries, deployment tools).",
  //         "Ensure consistent formatting for dates across all sections (e.g., MM/YYYY - MM/YYYY or YYYY - YYYY).",
  //       ],
  //       suggested_skills: [
  //         "Git/Version Control",
  //         "Cloud Platforms (AWS/Azure/GCP basics)",
  //         "Testing Frameworks (e.g., Jest, React Testing Library)",
  //         "Deployment Tools (e.g., Heroku, Netlify, Vercel)",
  //         "TypeScript (for building robust applications)",
  //         "State Management Libraries (e.g., Redux, React Context API, Zustand)",
  //       ],
  //     },
  //   };
  const { ai_generated_feedback, personal_details, resume_content, skills } =
    feedback;
  return (
    <Modal
      className="bg-slate-700 m-4 p-2 rounded-2xl outline-none"
      isOpen={isModelOpen}
      onRequestClose={onCloseModel}
    >
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-bold text-white">Resume Feedback</span>
          <button
            className=" self-end text-2xl text-white font-bold cursor-pointer pb-1"
            onClick={onCloseModel}
          >
            <IoMdClose />
          </button>
        </div>
        <h1 className="text-xl text-white font-bold">
          Resume Rating: {ai_generated_feedback?.resume_rating}
        </h1>
        <span className="font-bold text-xl text-white">
          Improvement Areas:-
        </span>
        <ul className="pl-8">
          {ai_generated_feedback.improvement_areas.map((each, idx) => {
            return (
              <li key={idx} className="text-lg text-white list-disc">
                {each}
              </li>
            );
          })}
        </ul>

        <h1 className="text-lg font-bold text-white">Suggested Skills:-</h1>
        <ul className="pl-8">
          {ai_generated_feedback.suggested_skills.map((each, idx) => {
            return (
              <li key={idx} className="list-disc text-lg text-white">
                {each}
              </li>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
}

export default FeedbackModal;
