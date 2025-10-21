import React from 'react';

const projects = [
  {
    title: 'Finacio',
    event: 'ShellHacks 2024',
    stack: ['React', 'Python', 'SQL', 'Microsoft Co-Pilot'],
    description: [
      'Built a React-based financial planner',
      'Integrated chatbot trained with JSON via Microsoft Co-Pilot',
    ],
  },
  {
    title: 'SweetSweetRecipes',
    stack: ['Swift', 'SwiftUI'],
    description: [
      'Created a random recipe generator using external API',
    ],
  },
  {
    title: 'TLDR',
    stack: ['Python', 'JavaScript', 'Flask', 'BART AI'],
    description: [
      'Chrome extension to summarize articles using BART model',
      'Extracted text via JS, summarized with Flask backend',
    ],
  },
  {
    title: 'Study Den',
    stack: ['Python', 'Tesseract', 'ChatGPT', 'Unity'],
    description: [
      'Extracted text from images with Tesseract and passed to ChatGPT',
      'Built educational mini-games in Unity based on extracted questions',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-navy-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-navy-700 hover:border-blue-500/50"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-400 mb-1">
                  {project.title}
                </h3>
                {project.event && (
                  <p className="text-sm text-cyan-400 font-semibold">
                    {project.event}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
