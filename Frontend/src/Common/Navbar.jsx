import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 ${
      isActive
        ? " text-white border-b-2 border-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="bg-black px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white tracking-widest">
          Hadiya Wafai
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>


          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;