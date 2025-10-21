import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Education & Certifications
        </h2>

        <div className="space-y-8">
          <div className="bg-navy-700 p-8 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                🎓
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  Bachelor's Degree in Data Analytics
                </h3>
                <h4 className="text-xl text-gray-300 mb-2">Miami Dade College</h4>
                <p className="text-gray-400">Jan. 2020 – Jul. 2023 | Miami, FL</p>
              </div>
            </div>
          </div>

          <div className="bg-navy-700 p-8 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-start border-l-4 border-blue-500 pl-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-300">
                    Swift – Certified User
                  </h4>
                  <p className="text-gray-400">Dec. 2024</p>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-blue-500 pl-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-300">
                    Business Industry Operations Certification
                  </h4>
                  <p className="text-gray-400">Jul. 2023</p>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-blue-500 pl-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-300">
                    Business Intelligence Professional Certification
                  </h4>
                  <p className="text-gray-400">Jul. 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
