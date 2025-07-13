import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["experience", "skills", "education", "projects", "achievements", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">
        <span className="text-blue-600">S</span>hubh <span className="text-blue-600">P</span>atel
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <ul className="flex gap-4 md:gap-6">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="capitalize px-3 py-2 font-medium text-black rounded-md transition duration-200 hover:bg-gray-100 hover:text-black"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <div className="md:hidden text-black">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="capitalize px-4 py-2 font-semibold hover:bg-gray-100 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
