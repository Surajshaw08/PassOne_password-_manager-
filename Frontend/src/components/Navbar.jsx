import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between px-3 py-4 items-center md:px-6 bg-slate-700'>
        {/* Logo */}
        <div className='logo ml-2 md:ml-5 cursor-pointer flex items-center justify-center'>
          <lord-icon className = ' h-10 w-10'
            src="https://cdn.lordicon.com/swohpbwe.json"
            trigger="loop"
            stroke="bold"
            // state="loop-cycle"
            colors="primary:#000000,secondary:#f24c00,tertiary:#16c72e,quaternary:#000000"
            >
          </lord-icon>
          <h1 className='text-green-600 text-2xl md:text-4xl font-bold text-center'>
            &lt;<span className=' text-white'>Pass</span><span className="text-green-400">One</span>/&gt;
          </h1>
        </div>

        {/* Menu (Hidden in small screens) */}
        <div className=' flex items-center justify-center'>
          <ul className='hidden md:flex flex-row space-x-4 md:space-x-7 font-medium text-white'>
            <div className=' flex items-center justify-center cursor-pointer'>
              <lord-icon className=' h-10 w-10'
                src="https://cdn.lordicon.com/pgirtdfe.json"
                trigger="morph"
                stroke="bold"
                state="morph-mantion"
                colors="primary:#000000,secondary:#109121,tertiary:#b26836,quaternary:#f24c00,quinary:#3a3347,senary:#0a5c15,septenary:#ffffff"
              >
              </lord-icon>
              {/* <li className='cursor-pointer'>Home</li> */}
            </div>
            <lord-icon className=' h-10 w-10 cursor-pointer'
              src="https://cdn.lordicon.com/hhljfoaj.json"
              trigger="loop"
              stroke="bold"
              state="hover-looking-around"
              colors="primary:#000000,secondary:#109121,tertiary:#ffffff"
            >
            </lord-icon>
            {/* <li className='cursor-pointer'>Contact</li> */}
            <lord-icon className=' h-10 w-10 cursor-pointer'
              src="https://cdn.lordicon.com/bdnahcds.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#000000,secondary:#ffffff,tertiary:#f24c00,quaternary:#109121,quinary:#eee966,senary:#3a3347"
            >
            </lord-icon>
            {/* <li className='cursor-pointer'>Know More</li> */}
          </ul>
        </div>

        {/* Login Button */}
        {/* <div className='mr-2 md:mr-5'>
          <button className='font-extrabold cursor-pointer border-2 rounded-4xl w-16 md:w-20'>
            Login
          </button>
        </div> */}
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center space-x-5 mt-3">
        <div className=' flex items-center justify-center cursor-pointer'>
          <lord-icon
            src="https://cdn.lordicon.com/pgirtdfe.json"
            trigger="hover"
            state="loop-3d-roll"
          >
          </lord-icon>
          {/* <li className='cursor-pointer'>Home</li> */}
        </div>
        <lord-icon className=' h-10 w-10'
          src="https://cdn.lordicon.com/hhljfoaj.json"
          trigger="loop"
          stroke="bold"
          state="hover-looking-around"
          colors="primary:#000000,secondary:#109121,tertiary:#ffffff"
        >
        </lord-icon>
        {/* <span className="cursor-pointer">Contact</span> */}
        <lord-icon className=' h-10 w-10'
          src="https://cdn.lordicon.com/bdnahcds.json"
          trigger="loop"
          stroke="bold"
          colors="primary:#000000,secondary:#ffffff,tertiary:#f24c00,quaternary:#109121,quinary:#eee966,senary:#3a3347"
        >
        </lord-icon>
        {/* <span className="cursor-pointer">Know More</span> */}
      </div>
    </div>
  );
}

export default Navbar;
