import React from 'react';

const experiences = [
  {
    title: 'Data Analyst & Full Stack Developer',
    company: 'IRM — International Reinsurance Managers',
    dates: 'Mar. 2024 – May 2025',
    location: 'Miami, FL',
    responsibilities: [
      'Built reports in SSRS with advanced SQL queries',
      'Created Inventory system using TSQL and C# for .NET Blazor',
      'Automated medical data pipeline for Power BI',
    ],
  },
  {
    title: 'Front-End App Developer Intern',
    company: 'Siembra',
    dates: 'Nov. 2024 – Jan. 2025',
    location: 'Miami, FL',
    responsibilities: [
      'Enhanced UI with SwiftUI',
      'Integrated archive features with backend API',
    ],
  },
  {
    title: 'Data Analyst Tutor',
    company: 'Miami Dade College',
    dates: 'Aug. 2022 – Jun. 2025',
    location: 'Miami, FL',
    responsibilities: [
      'Tutored 200+ students in SQL, Power BI, Python, Access',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Miami Dade College',
    dates: 'Jan. 2023 – Jul. 2023',
    location: 'Miami, FL',
    responsibilities: [
      'Built Tableau dashboards for STEM trend analysis',
      'Designed predictive model for STEM course enrollment',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'UDT IT Consulting',
    dates: 'Sep. 2022 – Feb. 2023',
    location: 'Miami, FL',
    responsibilities: [
      'Created real-time KPIs in Power BI',
      'Managed datasets with 100k+ weekly rows',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-navy-900"></div>

                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-navy-700 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-300 mb-1">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-gray-400 mb-1">{exp.dates}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                    <ul
                      className={`space-y-2 text-gray-300 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm leading-relaxed">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
