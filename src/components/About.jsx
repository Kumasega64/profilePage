import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start min-h-screen pt-32 sm:pt-48 md:pt-64 px-4 text-white space-y-6"
    >
      {/* Profile Image */}
      <img
        src="assets/profile2.jpg"
        alt="Profile"
        className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover shadow-lg"
      />

      {/* Name and Titles */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-3 sm:space-y-0 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Timothy Dance</h2>

        {/* Animated Titles */}
        <div className="relative overflow-hidden h-12 sm:h-14 md:h-16">
          <div className="animate-[text-carousel_9s_infinite] flex flex-col">
            <div className="flex items-center justify-center h-12 sm:h-14 md:h-16">
              <span className="bg-[#68180d] py-1 px-3 rounded-md text-sm sm:text-base md:text-lg">
                Data Analyst
              </span>
            </div>
            <div className="flex items-center justify-center h-12 sm:h-14 md:h-16">
              <span className="bg-[#1c7a47] py-1 px-3 rounded-md text-sm sm:text-base md:text-lg">
                Web Developer
              </span>
            </div>
            <div className="flex items-center justify-center h-12 sm:h-14 md:h-16">
              <span className="bg-[#6f2dad] py-1 px-3 rounded-md text-sm sm:text-base md:text-lg">
                Data Engineer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center mt-6 space-y-4">
        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/timothy-dance"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 sm:h-7 sm:w-7 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                -.546-1.385-1.333-1.754-1.333-1.754
                -1.09-.744.083-.729.083-.729
                1.205.084 1.84 1.236 1.84 1.236
                1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605
                -2.665-.3-5.466-1.332-5.466-5.93
                0-1.31.465-2.382 1.235-3.22
                -.135-.303-.54-1.523.105-3.176
                0 0 1.005-.322 3.3 1.23
                .96-.267 1.98-.399 3-.405
                1.02.006 2.04.138 3 .405
                2.28-1.552 3.285-1.23 3.285-1.23
                .645 1.653.24 2.873.12 3.176
                .765.838 1.23 1.91 1.23 3.22
                0 4.61-2.805 5.625-5.475 5.92
                .42.36.81 1.096.81 2.22
                0 1.606-.015 2.896-.015 3.286
                0 .315.21.69.825.57
                C20.565 22.092 24 17.592 24 12.297
                c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/timothy-dance"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/10 hover:bg-blue-500/20 hover:scale-110 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 sm:h-7 sm:w-7 text-white"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037
              -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049
              c.476-.9 1.637-1.852 3.372-1.852
              3.604 0 4.268 2.372 4.268 5.455v6.288zM5.337 7.433
              c-1.144 0-2.067-.926-2.067-2.067
              0-1.144.923-2.067 2.067-2.067
              1.143 0 2.066.923 2.066 2.067
              0 1.141-.923 2.067-2.066 2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>

        {/* Resume Link (text) */}
        <a
          href="/Timothy_Dance_Resume.pdf"
          className="font-bold text-white text-lg sm:text-xl md:text-2xl px-6 py-3 bg-white/10 rounded-full hover:bg-green-500/20 hover:text-green-400 hover:scale-110 transition-all duration-200"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;
