import React, { useState } from "react";

const scrollingLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
];

const skillData = [
  {
    title: "Languages",
    skills: [
      { name: "Python, SQL", level: 9 },
      { name: "JavaScript", level: 9 },
      { name: "HTML/CSS", level: 10 },
      { name: "C/C++", level: 10 },
    ],
  },
  {
    title: "Data Analysis & Visualization",
    skills: [
      { name: "Pandas, Numpy", level: 8 },
      { name: "Matplotlib, Seaborn", level: 10 },
      { name: "Plotly", level: 7 },
      { name: "Power BI, Excel", level: 9 },
    ],
  },
  {
    title: "Machine Learning & EDA",
    skills: [
      { name: "Scikit-learn", level: 9 },
      { name: "Statsmodels", level: 7 },
      { name: "Feature Engineering, EDA", level: 9 },
      { name: "Model Evaluation", level: 9 },
    ],
  },
  {
    title: "Web Scraping & APIs",
    skills: [
      { name: "BeautifulSoup", level: 9 },
      { name: "Selenium", level: 8 },
      { name: "Requests", level: 8 },
      { name: "REST APIs", level: 10 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 8 },
      { name: "MySQL", level: 8 },
      { name: "MongoDB", level: 9 },
      { name: "CRUD Operations", level: 9 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Jupyter, Google Colab", level: 8 },
      { name: "Git, GitHub, VS Code", level: 10 },
      { name: "PyCharm", level: 7 },
      { name: "Google Cloud Platform", level: 7 },
    ],
  },
];

const SkillCard = ({ title, skills, widthClass, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`${widthClass} transition-all duration-500 ease-in-out cursor-pointer`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="group bg-white h-full p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative">
        <h3 className="text-lg font-bold text-blue-600 text-center mb-4">{title}</h3>

        {/* Mobile View: Show tags only */}
        <div className="flex flex-wrap justify-center gap-2 sm:hidden">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Desktop View: Hover effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300 ease-in-out z-10 px-4 hidden sm:block">
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 ease-in-out space-y-3 z-20 relative hidden sm:block">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm text-gray-700 font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1 overflow-hidden">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${(skill.level / 10) * 100}%`,
                    transitionDelay: `${idx * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function SkillsOverview() {
  const [hoveredRow1, setHoveredRow1] = useState(null);
  const [hoveredRow2, setHoveredRow2] = useState(null);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const getWidth = (row, idx, hovered) => {
    if (hovered === null) return "w-full sm:w-1/3";
    if (hovered === idx) return "w-full sm:w-[40%]";
    return "w-full sm:w-[30%]";
  };

  return (
    <section id="skills" className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">Skills Overview</h2>

      {/* Scrolling Logos */}
      <div className="overflow-hidden w-full h-28 mb-12 relative">
        <div className="flex gap-10 animate-marquee w-max">
          {scrollingLogos.concat(scrollingLogos).map((logo, idx) => {
            const scaleClass =
              hoveredLogo === idx
                ? "scale-125 z-10"
                : hoveredLogo === idx - 1 || hoveredLogo === idx + 1
                ? "scale-90 opacity-80"
                : "scale-100";
            return (
              <img
                key={idx}
                src={logo}
                alt="tech"
                className={`w-14 h-14 sm:w-16 sm:h-16 object-contain transition-all duration-300 ${scaleClass}`}
                onMouseEnter={() => setHoveredLogo(idx)}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            );
          })}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[250px]">
          {skillData.slice(0, 3).map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              skills={category.skills}
              widthClass={getWidth("row1", idx, hoveredRow1)}
              onMouseEnter={() => setHoveredRow1(idx)}
              onMouseLeave={() => setHoveredRow1(null)}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[250px]">
          {skillData.slice(3, 6).map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              skills={category.skills}
              widthClass={getWidth("row2", idx, hoveredRow2)}
              onMouseEnter={() => setHoveredRow2(idx)}
              onMouseLeave={() => setHoveredRow2(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
