import React from 'react';

const skillsData = {
  Languages: ['Python', 'C#', 'SQL', 'TSQL', 'Swift', 'HTML', 'CSS', 'R', 'DAX', 'M'],
  Frameworks: ['.NET', 'React', 'DAX'],
  Tools: ['SSRS', 'Dapper', 'MySQL', 'Power BI', 'Tableau'],
  Libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'Polars', 'Flask'],
};

const certifications = [
  'Swift – Certified User (Dec. 2024)',
  'Business Industry Operations Certification (Jul. 2023)',
  'Business Intelligence Professional Certification (Jul. 2022)',
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Technical Skills</h2>
          <div className="space-y-4">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-700 mb-2">{category}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Certifications</h2>
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="text-sm text-gray-600">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
