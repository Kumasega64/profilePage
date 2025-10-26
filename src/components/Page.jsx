import React from "react";
import FinancioImg from "../assets/Financio.jpg";
import buddyImg from "../assets/studyBuddy.png";
import IRM from "../assets/IRM.jpg";
import MDC from "../assets/mdc.jpg";
import TN from "../assets/TN.jpg";
import PB from "../assets/logo.png"


const Page = () => {
  const workHistory = [
    {
      id: 1,
      company: "Miami Dade College",
      role: "Data Analyst Tutor",
      period: "Sep 2022 - May 2025",
      description:
        "",
      image: MDC,
      link: "#",
    },
    {
      id: 2,
      company: "IRM",
      role: "Data Analyst / Full Stack Dev",
      period: "Jan 2024 - May 2025",
      description:
        "",
      image: IRM,
      link: "#",
    },
    {
      id: 2,
      company: "True North Academy",
      role: "Data Engineer/Frontend Developer",
      period: "July 2025 - Present",
      description:"",
      image: TN,
      link: "#",
    },
    // Add more work history objects here
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gradient-to-b from-[#07131c] to-[#305472] text-gray-200">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-[#07131c]/80 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Timothy Dance</h1>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#about" className="hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#work-history" className="hover:text-gray-400 transition">
                Work History
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-start h-screen pt-64 text-3xl text-white space-y-6"
      >
        <img
          className="rounded-full w-64 h-64 object-cover shadow-lg"
          src="assets/stu.jpg"
          alt="Profile"
        />
        <div className="flex flex-row items-center space-x-6">
          <h2 className="text-5xl font-bold">Timothy Dance</h2>

          {/* Animated Job Titles */}
          <div className="relative h-14 overflow-hidden">
            <div className="animate-[text-carousel_9s_infinite]">
              <div className="h-14 flex items-center justify-center">
                <span className="bg-[#68180d] py-1 px-3 rounded-md">
                  Data Analyst
                </span>
              </div>
              <div className="h-14 flex items-center justify-center">
                <span className="bg-[#1c7a47] py-1 px-3 rounded-md">
                  Web Developer
                </span>
              </div>
              <div className="h-14 flex items-center justify-center">
                <span className="bg-[#6f2dad] py-1 px-3 rounded-md">
                  Data Engineer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3..." />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9z..." />
            </svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>

        <div className="bg-[#474349] rounded-2xl p-6 w-4/5 max-w-6xl">
          <div className="flex flex-wrap justify-center bg-gray-200 rounded-lg p-4">
            {[
              {
                title: "PrepBear",
                description:
                  "PrepBear is an AI-powered mock interview web application built on top of Google’s open-source Live API Web Console project. PrepBear helps students and job seekers practice behavioral and technical interviews tailored to specific job titles, companies, and their resumes.",
                image: PB,
                link: "https://github.com/Albertoh16/Bear-Necessities",
              },
              {
                title: "TLDR",
                description:
                  "Created a tool that quickly summarizes content, helping users decide if an article is worth reading.",
                image: "assets/portfolio.jpg",
                link: "https://github.com/Albertoh16/TLDR",
              },
              {
                title: "Financio",
                description:
                  "Our web app helps users improve their financial literacy through interactive learning. It includes a quiz to assess financial knowledge, a custom chatbot that explains financial concepts and answers questions, and a budgeting tool that tracks spending and helps users manage their finances effectively.",
                image: FinancioImg,
                link: "https://github.com/timothy-dance/financio",
              },
              {
                title: "Study Buddy",
                description:
                  "Study Buddy is a mobile application that turns studying into an interactive and rewarding experience. Users create their own personalized 'Study Buddy' avatar and level it up by engaging with educational content and mini-games.",
                image: buddyImg,
                link: "https://github.com/Kumasega64/studyDen",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 w-full sm:w-1/2 lg:w-1/3 m-2 p-3 text-center text-2xl rounded-lg shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline text-gray-800"
                >
                  <header className="relative h-48 overflow-hidden rounded-lg mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-lg py-2">
                      {project.title}
                    </div>
                  </header>
                  <p className="text-base">{project.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section
        id="work-history"
        className="relative max-w-6xl mx-auto my-20 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Work History</h2>

        <div className="flex flex-row items-center justify-center flex-wrap gap-10">
          {workHistory.map((job) => (
            <div key={job.id} className="relative group">
              {/* Image Button */}
              <button
                style={{
                  backgroundImage: `url(${job.image})`,
                }}
                className="w-24 h-24 rounded-full bg-cover bg-center shadow-md hover:scale-105 hover:ring-4 hover:ring-blue-400 transition-transform duration-300"
              />

              {/* Hover Card */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-72 p-4 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 z-10">
                <h3 className="text-xl font-bold mb-1">{job.company}</h3>
                <p className="text-sm text-gray-600">{job.period}</p>
                <p className="text-base font-semibold">{job.role}</p>
                <p className="text-sm text-gray-700 mt-2">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
