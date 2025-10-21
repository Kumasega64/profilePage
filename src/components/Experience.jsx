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
    <section id="experience" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-light text-gray-900 mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600">{exp.company}</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                {exp.dates}
              </span>
            </div>
            <ul className="space-y-1 text-sm text-gray-600">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
