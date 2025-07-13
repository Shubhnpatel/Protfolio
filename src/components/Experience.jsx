import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      title: "Data Analyst Intern",
      company: "CybraneX",
      duration: "June 2024 – Feb 2025",
      description:
        "Worked on Exploratory Data Analysis (EDA) and Feature Engineering and made some exclusive Dashboards using Power BI",
    },
    {
      title: "Data Analyst Intern",
      company: "Accenture India",
      duration: "Feb 2025 – June 2025",
      description:
        "Worked with US Client on sales dashboards and reporting using SQL, Python, and Power BI and scrapped data from different websites",
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2 mb-12">
          <FaBriefcase className="text-blue-600 text-2xl" />
          Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:justify-between w-full"
              >
                {/* Dot in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow z-10" />

                {/* Left content */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-5/12 w-full md:text-right text-center md:pr-6">
                      <div className="bg-white p-4 rounded-md shadow-md border inline-block w-full max-w-md">
                        <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                        <p className="text-xs text-gray-400">{exp.duration}</p>
                        <p className="text-sm text-gray-500 mt-2">{exp.description}</p>
                      </div>
                    </div>
                    <div className="md:w-5/12 hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12 hidden md:block" />
                    <div className="md:w-5/12 w-full md:text-left text-center md:pl-6 mt-6 md:mt-0">
                      <div className="bg-white p-4 rounded-md shadow-md border inline-block w-full max-w-md">
                        <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                        <p className="text-xs text-gray-400">{exp.duration}</p>
                        <p className="text-sm text-gray-500 mt-2">{exp.description}</p>
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

export default Experience;
