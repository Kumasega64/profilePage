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
      className="relative max-w-6xl mx-auto mt-40 mb-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Work History</h2>

      <div className="flex flex-row items-center justify-center flex-wrap gap-10">
        {workHistory.map((job) => (
          <div key={job.id} className="relative group">
            <button
              className="w-24 h-24 rounded-full bg-cover bg-center shadow-md hover:scale-105 hover:ring-4 hover:ring-blue-400 transition"
              style={{ backgroundImage: `url(${job.image})` }}
            />

            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-72 p-4 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition z-10">
              <h3 className="text-xl font-bold">{job.company}</h3>
              <p className="text-sm text-gray-600">{job.period}</p>
              <p className="font-semibold">{job.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
