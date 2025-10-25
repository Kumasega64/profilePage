import React from "react";

const Page = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-gradient-to-b from-[#07131c] to-[#305472] text-gray-200">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-[#07131c]/80 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Timothy Dance</h1>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#about" className="hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#work-history" className="hover:text-gray-400 transition">
                Work History
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-start h-screen pt-64 text-3xl text-white space-y-6"
      >
        <img
          className="rounded-full w-64 h-64 object-cover shadow-lg"
          src="assets/stu.jpg"
          alt="Profile"
        />
        <div className="flex flex-row items-center space-x-6">
          <h2 className="text-5xl font-bold">Timothy Dance</h2>

          {/* Animated Job Titles */}
          <div className="relative h-14 overflow-hidden">
            <div className="animate-[text-carousel_9s_infinite]">
              <div className="h-14 flex items-center justify-center">
                <span className="bg-[#68180d] py-1 px-3 rounded-md">
                  Data Analyst
                </span>
              </div>
              <div className="h-14 flex items-center justify-center">
                <span className="bg-[#1c7a47] py-1 px-3 rounded-md">
                  Web Developer
                </span>
              </div>
              <div className="h-14 flex items-center justify-center">
                <span className="bg-[#6f2dad] py-1 px-3 rounded-md">
                  Data Engineer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3..." />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9z..." />
            </svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
        <div className="bg-[#474349] rounded-2xl p-6 w-3/5">
          <div className="flex flex-wrap justify-center bg-gray-200 rounded-lg p-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="bg-gray-100 w-1/3 m-2 p-3 text-center text-2xl rounded-lg shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              >
                <a href="#" className="block no-underline text-gray-800">
                  <header className="relative h-48 overflow-hidden rounded-lg mb-2">
                    <img
                      src="assets/stu.jpg"
                      alt="Project"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-lg py-2">
                      Project {num}
                    </div>
                  </header>
                  <p className="text-base">This is a test project card.</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section
        id="work-history"
        className="relative max-w-6xl mx-auto my-20 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Work History</h2>
        <div className="flex flex-row items-center space-x-6 justify-center">
          {[1, 2].map((i) => (
            <div key={i} className="group relative">
              <button className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('assets/stu.jpg')] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" />
              <div className="absolute bottom-full mb-2 hidden w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 group-hover:block group-hover:opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <a
                  href="#"
                  className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-96 p-6 text-xl md:w-[500px] md:p-8 md:text-2xl"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      IRM
                    </h5>
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Jan 2024 - May 2025
                    </h3>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Data Analyst / Full Stack Dev
                    </h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
