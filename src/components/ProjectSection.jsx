import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const [projects] = useState([
    {
      title: "ElectroHub-Sales Data Analysis",
      description: "Power BI dashboard showing sales trends and analysis of sales over multiple dimensions.",
      techStack: ["Power BI", "Excel", "Data Analysis"],
      imageUrl: "https://res.cloudinary.com/dzeyosnyp/image/upload/v1752294487/fa7f0e31-934b-4198-b2d9-3c4e816a1023.png",
      githubLink: "https://github.com/Shubhnpatel/sales-data-analysis",
    },
    {
      title: "Web Scrapped the Data of Top 1000 Movie",
      description: "Python project that collects detailed information such as movie titles, genres, ratings, and release years from a movie website.",
      techStack: ["Python", "BeautifulSoup", "Pandas"],
      imageUrl: "https://res.cloudinary.com/dzeyosnyp/image/upload/v1752294583/8546cba6-cdca-4f54-954a-f7c713c9e7c4.png",
      githubLink: "https://github.com/Shubhnpatel/Data-Scraping-Using-Python",
    },
    {
      title: "Blinkit Data Analysis",
      description: "Python-based project focused on exploring user behavior, product trends, and sales patterns in Blinkit dataset.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Jupyter"],
      imageUrl: "https://res.cloudinary.com/dzeyosnyp/image/upload/v1752294818/5a27d85f-1b8c-4e1b-9e1b-153ee3c4989e.png",
      githubLink: "https://github.com/Shubhnpatel/Blinkit-Data-Analysis",
    },
    {
      title: "Olympics Data Analysis",
      description: "Comprehensive project combining Python for feature extraction and Excel/Power BI for visualizing athlete and medal data.",
      techStack: ["Python", "Excel", "Power BI", "EDA", "Matplotlib", "Seaborn", "Data Cleaning"],
      imageUrl: "https://res.cloudinary.com/dzeyosnyp/image/upload/v1752294715/9a35a616-88fd-4983-98e4-7e64ccd2eaf7.png",
      githubLink: "https://github.com/Shubhnpatel/Olympics-Data-Analysis.git",
    },
  ]);

  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="flip-card w-full h-64 sm:h-80">
            <div className="flip-inner">
              {/* Front */}
              <div className="flip-front shadow border overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back */}
              <div className="flip-back p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-black text-xs px-2 py-1 rounded-full hover:bg-white duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="-white flex items-center gap-2 mt-auto"
                  >
                    <FaGithub className="text-4xl" />
                    <p className="bg-white rounded-md text-black p-1 font-bold hover:bg-blue-200 duration-300">
                      View Code
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
