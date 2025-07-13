import React from "react";
import BlobButton from "./BlobButton";

const Achievements = () => {
  const achievements = [
    {
      title: "Won Socio-Tech Hackathon 2024",
      description:
        "National-level hackathon with 300+ teams. Created a solution to a real-world problem and won ₹10,000. Organized by Cognizant.",
      imageUrl:
        "https://res.cloudinary.com/dzeyosnyp/image/upload/v1752298185/ac078794-424c-43ee-a0e4-3a6aa9c752c5.png",
      link: "https://drive.google.com/file/d/14993B0Ss9nPhPtUlIbxoqf6tXrri50fb/view?usp=drive_link",
    },
    {
      title: "Runner Up - Anveshion South-Zone 2023-24",
      description:
        "Secured second position in Anveshion Research Hackathon organized by AIU (All India Universities).",
      imageUrl:
        "https://res.cloudinary.com/dzeyosnyp/image/upload/v1752298317/ef11f8b2-051b-4fef-89ea-a1f9c43e52b0.png",
      link: "https://drive.google.com/file/d/1_uAAeZMlfsAboucgmEApviXOs4_C0C1f/view?usp=drive_link",
    },
  ];

  return (
    <section id="achievements" className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-center">Achievements</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow hover:shadow-lg border overflow-hidden bg-white transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-44 object-contain object-center bg-gray-50"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4">
                <BlobButton link={item.link} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
