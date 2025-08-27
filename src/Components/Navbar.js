import React from "react";
import headerlogo from "../Assets/headerlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#1E3E62] flex justify-between items-center sticky top-0 px-6 shadow-md z-50">
      <div className="flex">
        <Link to="/">
          <img src={headerlogo} alt="headerlogo" className="h-12 transition-transform duration-300 hover:scale-105" />
        </Link>
      </div>
      <div className="flex w-full justify-end">
        <ul className="flex items-center space-x-8 text-white text-sm md:text-base font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
