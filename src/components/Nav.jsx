import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#07131c]/80 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Timothy Dance</h1>

        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#work-history" className="hover:text-gray-400 transition">
              Work History
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
