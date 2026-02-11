import React from "react";

const MDC = "/assets/mdc.jpg";
const IRM = "/assets/IRM.jpg";
const TN = "/assets/TN.jpg";

const workHistory = [
  {
    id: 1,
    company: "Miami Dade College",
    role: "Data Analyst Tutor",
    period: "Sep 2022 - Jan 2024",
    image: MDC,
  },
  {
    id: 2,
    company: "IRM",
    role: "Data Analyst / Full Stack Dev",
    period: "Jan 2024 - May 2025",
    image: IRM,
  },
  {
    id: 3,
    company: "True North Academy",
    role: "Data Engineer / Frontend Developer",
    period: "July 2025 - Present",
    image: TN,
  },
];

const Work = () => {
  return (
    <section
      id="work-history"
      className="max-w-6xl mx-auto mt-40 mb-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Work History</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {workHistory.map((job) => (
          <div
            key={job.id}
            className="w-72 bg-blue-100 rounded-xl shadow-md p-6 flex flex-col items-center"
          >
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center shadow mb-4"
              style={{ backgroundImage: `url(${job.image})` }}
            />

            <h3 className="text-lg font-bold text-gray-800">
              {job.company}
            </h3>
            <p className="text-sm text-gray-600">{job.period}</p>
            <p className="mt-2 font-semibold text-gray-700">
              {job.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
