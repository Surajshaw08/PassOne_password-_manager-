import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

        {/* Menu Icons */}
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex flex-row space-x-4 md:space-x-7 font-medium text-white">
            <lord-icon
              className="h-10 w-10 cursor-pointer"
              src="https://cdn.lordicon.com/hhljfoaj.json"
              trigger="loop"
              stroke="bold"
              state="hover-looking-around"
              colors="primary:#000000,secondary:#109121,tertiary:#ffffff"
            ></lord-icon>
            <lord-icon
              className="h-10 w-10 cursor-pointer"
              src="https://cdn.lordicon.com/bdnahcds.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#000000,secondary:#ffffff,tertiary:#f24c00,quaternary:#109121"
            ></lord-icon>
          </ul>
        </div>

        {/* Login & Signup Buttons */}
        <div className="mr-2 md:mr-5 space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Signup
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
