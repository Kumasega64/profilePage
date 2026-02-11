import React from "react";

const projects = [
  {
    title: "PrepBear",
    description:
      "AI-powered mock interview web app tailored to roles, companies, and resumes.",
    languages: "React, Tailwind, Gemini, TypeScript",
    image: "/assets/PB.jpg",
    link: "https://github.com/Albertoh16/Bear-Necessities",
  },
  {
    title: "Financio",
    description:
      "Financial literacy platform with quizzes, budgeting tools, and an AI chatbot.",
    languages: "React, SQL, Java",
    image: "/assets/Financio.jpg",
    link: "https://github.com/timothy-dance/financio",
  },
  {
    title: "Study Buddy",
    description:
      "Turns photos of study material into quizzes using OCR and AI.",
    languages: "Tesseract, SQL, Java",
    image: "/assets/studyBuddy.png",
    link: "https://github.com/Kumasega64/studyDen",
  },
  {
    title: "TLDR",
    description:
      "Created a tool that quickly summarizes web articles helping users quickly decide if they are worth reading.",
    languages: "Bart Model, Flask, AI",
    image: "/assets/TLDR.png",
    link: "https://github.com/Albertoh16/TLDR",
  },
  {
    title: "Steam Discount Webpage",
    description:
      "A web page that lets users dynamically fetch Steam sale recommendations based on input criteria.",
    languages: "React, Typescript",
    image: "/assets/steam.png",
    link: "https://github.com/Kumasega64/SteamDiscountWebpage",
  },
  {
    title: "Sweet Sweet Recipes",
    description:
      "An app that allows users to find random recipes save and make edits to them. Made for apple phones",
    languages: "Swift, Xcode",
    image: "/assets/apple.png",
    link: "https://github.com/Kumasega64/SweetSweetRecipes",
  },
  {
    title: "Acess Pizza Store",
    description:
      "A beginner friendly Microsoft Access (.accdb) project built as a hands-on practice template.",
    languages: "SQL, Access",
    image: "/assets/pizza.png",
    link: "https://github.com/Kumasega64?tab=repositories",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 m-2 p-4 rounded-lg shadow hover:-translate-y-1 transition 
                       w-72 sm:w-full md:w-1/2 lg:w-1/3 flex flex-col items-center text-center text-gray-800"
          >
            {/* Project Image (always rectangular) */}
            <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Title */}
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>

            {/* Project Description */}
            <p className="text-base mb-2">{project.description}</p>

            {/* Languages */}
            <p className="text-sm text-gray-700">
              <strong>Coding Languages:</strong> {project.languages}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
