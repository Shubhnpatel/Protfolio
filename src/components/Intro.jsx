import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-16 bg-white max-w-7xl mx-auto">

      {/* Profile Image Section */}
      <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 animate-float">
          <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-spin-slow"></div>
          <img
            src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1752321790/profile_qcyjw7.jpg"
            alt="Shubh Patel"
            className="absolute inset-0 w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Hi, I'm <span className="text-blue-600">Shubh Patel</span>
        </h2>
        <h3 className="text-lg sm:text-xl text-blue-500 font-semibold mb-4">
          Data Analyst
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 px-2 sm:px-0">
          I specialize in extracting insights from complex data using tools like
          SQL, Python, Power BI, and Excel. Passionate about turning raw data
          into impactful business decisions.
        </p>

        {/* Contact Button + Social Icons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Contact Me
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl sm:text-3xl">
            <a
              href="https://github.com/shubhnpatel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#333] hover:text-black transition" />
            </a>
            <a
              href="https://linkedin.com/in/shubhnpatel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#0077B5] hover:text-blue-800 transition" />
            </a>
            <a
              href="https://instagram.com/shubh__16_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#E1306C] hover:text-pink-600 transition" />
            </a>
            <a
              href="https://x.com/SHUBHPA70148898"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-black hover:text-gray-800 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
