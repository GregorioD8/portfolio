// /src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">My Portfolio</div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#about"
              className="text-lg font-medium text-gray-700 hover:text-blue-500 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg font-medium text-gray-700 hover:text-blue-500 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-medium text-gray-700 hover:text-blue-500 transition"
            >
              Contact
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;