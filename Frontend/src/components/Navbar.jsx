import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between px-3 py-4 items-center md:px-6 bg-slate-700">
        {/* Logo (Wrapped in Link) */}
        <Link to="/" className="logo ml-2 md:ml-5 cursor-pointer flex items-center justify-center">
          <lord-icon
            className="h-10 w-10"
            src="https://cdn.lordicon.com/swohpbwe.json"
            trigger="loop"
            stroke="bold"
            colors="primary:#000000,secondary:#f24c00,tertiary:#16c72e,quaternary:#000000"
          ></lord-icon>
          <h1 className="text-green-600 text-2xl md:text-4xl font-bold text-center ml-2">
            &lt;<span className="text-white">Pass</span><span className="text-green-400">One</span>/&gt;
          </h1>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Icons (Desktop) */}
        <div className="hidden md:flex items-center justify-center">
          <ul className="flex flex-row space-x-4 md:space-x-7 font-medium text-white">
            <Link to='/AboutUs'>
            <div className="relative group">
              <lord-icon
                className="h-10 w-10 cursor-pointer"
                src="https://cdn.lordicon.com/hhljfoaj.json"
                trigger="hover"
                stroke="bold"
                state="hover-looking-around"
                colors="primary:#000000,secondary:#109121,tertiary:#ffffff"
              ></lord-icon>

              {/* Tooltip below icon */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-white text-black text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                About Us
              </div>
            </div>
            </Link>

            <div className="relative group">
              <lord-icon
                className="h-10 w-10 cursor-pointer"
                src="https://cdn.lordicon.com/bdnahcds.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#000000,secondary:#ffffff,tertiary:#f24c00,quaternary:#109121"
              ></lord-icon>

              {/* Tooltip popup below the icon */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-white text-black text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                Term & Conditions
              </div>

            </div>


            <Link to="/login">
              <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition cursor-pointer">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (Only visible when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 px-4 py-3 space-y-4 text-white">
          <div className="flex space-x-4">
            <lord-icon
              className="h-8 w-8"
              src="https://cdn.lordicon.com/hhljfoaj.json"
              trigger="hover"
              stroke="bold"
              state="hover-looking-around"
              colors="primary:#000000,secondary:#109121,tertiary:#ffffff"
            ></lord-icon>
            <lord-icon
              className="h-8 w-8"
              src="https://cdn.lordicon.com/bdnahcds.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#000000,secondary:#ffffff,tertiary:#f24c00,quaternary:#109121"
            ></lord-icon>
          </div>
          <Link to="/login">
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
