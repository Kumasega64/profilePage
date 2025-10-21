import React, { useState, useEffect } from 'react';

const Hero = () => {
  const titles = ['Data Analyst', 'Data Engineer', 'Web Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-black text-white flex items-center justify-center text-2xl font-medium">
          TD
        </div>

        <h1 className="text-5xl font-light tracking-tight text-gray-900">
          Timothy Dance
        </h1>

        <p className="text-xl text-gray-600 font-light">
          {titles[currentTitleIndex]}
        </p>

        <div className="pt-4 flex justify-center items-center space-x-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600"
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/timothy-dance-231149259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Kumasega64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>

          <a
            href="mailto:timothyvsn@gmail.com"
            className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
