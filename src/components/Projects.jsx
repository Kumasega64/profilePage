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
    <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-light text-gray-900 mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 hover:border-gray-400 transition-colors"
          >
            <h3 className="text-base font-medium text-gray-900 mb-1">
              {project.title}
            </h3>
            {project.event && (
              <p className="text-xs text-gray-500 mb-3">
                {project.event}
              </p>
            )}
            <p className="text-xs text-gray-500 mb-3">
              {project.stack.join(' • ')}
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
