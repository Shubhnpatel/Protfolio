import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology, Chennai",
      duration: "2021 – 2025",
    },
    {
      title: "Higher Secondary (12th)",
      institution: "Puna International School, Gandhinagar",
      duration: "2020 – 2021",
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2 mb-12">
          <FaGraduationCap className="text-blue-600 text-2xl" />
          Education
        </h2>

        <div className="relative">
          {/* Central timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:justify-between w-full"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow z-10" />

                {/* Left side (even index) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-5/12 w-full md:text-right text-center md:pr-6">
                      <div className="bg-white p-4 rounded-md shadow-md border inline-block w-full max-w-md">
                        <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                        <p className="text-xs text-gray-400">{edu.duration}</p>
                      </div>
                    </div>
                    <div className="md:w-5/12 hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12 hidden md:block" />
                    <div className="md:w-5/12 w-full md:text-left text-center md:pl-6 mt-6 md:mt-0">
                      <div className="bg-white p-4 rounded-md shadow-md border inline-block w-full max-w-md">
                        <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                        <p className="text-xs text-gray-400">{edu.duration}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
