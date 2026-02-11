import React from "react";
const FinancioImg = "/assets/Financio.jpg";
const buddyImg = "/assets/studyBuddy.png";
const IRM = "/assets/IRM.jpg";
const MDC = "/assets/mdc.jpg";
const TN = "/assets/TN.jpg";
const PB = "/assets/logo.png";


const Page = () => {
  const workHistory = [
    {
      id: 1,
      company: "Miami Dade College",
      role: "Data Analyst Tutor",
      period: "Sep 2022 - Jan 2024",
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
        {/* Social Links */}
<div className="flex space-x-6 mt-4">
  {/* GitHub */}
  <a
    href="https://github.com/timothy-dance"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-8 w-8"
    >
      <path
        fillRule="evenodd"
        d="M12 .297c-6.63 0-12 5.373-12 12 
        0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
        -.546-1.385-1.333-1.754-1.333-1.754
        -1.09-.744.083-.729.083-.729
        1.205.084 1.84 1.236 1.84 1.236
        1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605
        -2.665-.3-5.466-1.332-5.466-5.93
        0-1.31.465-2.382 1.235-3.22
        -.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23
        .96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405
        2.28-1.552 3.285-1.23 3.285-1.23
        .645 1.653.24 2.873.12 3.176.765.838 1.23 1.91 1.23 3.22
        0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
        0 1.606-.015 2.896-.015 3.286
        0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297
        c0-6.627-5.373-12-12-12"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/timothy-dance"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-8 w-8"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037
        -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049
        c.476-.9 1.637-1.852 3.372-1.852
        3.604 0 4.268 2.372 4.268 5.455v6.288zM5.337 7.433
        c-1.144 0-2.067-.926-2.067-2.067
        0-1.144.923-2.067 2.067-2.067
        1.143 0 2.066.923 2.066 2.067
        0 1.141-.923 2.067-2.066 2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.225 0z"
      />
    </svg>
  </a>
</div>

{/* Work History Section */}
      <section
        id="work-history"
        className="relative max-w-6xl mx-auto mt-40 mb-20 text-center"
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
                  "PrepBear is an AI-powered mock interview web application that helps job seekers practice behaviorals that are tailored to specific job titles, companies, and their resumes.",
                languages: "React, Tailwind, Gemini, Typescript",
                image: PB,
                link: "https://github.com/Albertoh16/Bear-Necessities",
              },
              {
                title: "TLDR",
                description:
                  "Created a tool that quickly summarizes web articles helping users quickly decide if they are worth reading.",
                languages: "Bart Model, Flask, AI",
                image: "assets/portfolio.jpg",
                link: "https://github.com/Albertoh16/TLDR",
              },
              {
                title: "Financio",
                description:
                  "A web app designed to improve financial literacy with quizzes, budgeting tools, and an AI chatbot trained to answer any financial question",
                languages: "React, SQL, Jave",
                image: FinancioImg,
                link: "https://github.com/timothy-dance/financio",
              },
              {
                title: "Study Buddy",
                description:
                  "A mobile app that lets users take pictures of study material and turn them into quizzes using Tesseract and AI",
                languages: "Tesseact, SQL, Jave",
                image: buddyImg,
                link: "https://github.com/Kumasega64/studyDen",
              },
              {
                title: "Steam Discount Webpage",
                description:
                  "A web page that lets users dynamically fetch Steam sale recommendations based on input criteria.",
                languages: " React, Typescript",
                image: buddyImg,
                link: "https://github.com/Kumasega64/SteamDiscountWebpage",
              },
              {
                title: "Sweet Sweet Recipes",
                description:
                  "An app that allows users to find random recipes save and make edits to them. Made for apple phones",
                languages: " Swift, Xcode",
                image: buddyImg,
                link: "https://github.com/Kumasega64/SweetSweetRecipes",
              },
              {
                title: "Acess Pizza Store",
                description:
                  "A beginner friendly Microsoft Access (.accdb) project built as a hands-on practice template. ",
                languages: " SQL, Access",
                image: buddyImg,
                link: "https://github.com/Kumasega64?tab=repositories",
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
                  <p className="text-base mb-2">{project.description}</p>

                  <p className="text-sm text-gray-700">
                  <strong>Coding Languages:</strong> {project.languages}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Pages;
