import React from 'react';

const skillsData = {
  Languages: ['Python', 'C#', 'SQL', 'TSQL', 'Swift', 'HTML', 'CSS', 'R', 'DAX', 'M'],
  Frameworks: ['.NET', 'React', 'DAX'],
  Tools: ['SSRS', 'Dapper', 'MySQL', 'Power BI', 'Tableau'],
  Libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'Polars', 'Flask'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-navy-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4 border-b border-blue-500/30 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-navy-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
