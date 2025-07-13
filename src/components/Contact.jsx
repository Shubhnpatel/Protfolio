import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen pt-28 pb-16 px-4 bg-white scroll-mt-32"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

      <div className="max-w-md mx-auto text-center space-y-6">
        <p className="text-gray-700 text-base sm:text-lg">
          I'd love to connect! You can reach out to me directly via phone or email.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="+919638330804" // <-- change to your number
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
          >
            <FaPhoneAlt />
            <span>Call Me</span>
          </a>

          <a
            href="shubhnpatel@gmail.com" // <-- change to your email
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
