import React from 'react'

const Footer = () => {
    return (
        <div className="bg-slate-800 w-full py-8">
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Logo */}
                <h1 className="text-green-600 text-2xl md:text-4xl font-bold text-center mb-4">
                <lord-icon className = ' h-10 w-10'
            src="https://cdn.lordicon.com/swohpbwe.json"
            trigger="loop"
            stroke="bold"
            // state="loop-cycle"
            colors="primary:#000000,secondary:#f24c00,tertiary:#16c72e,quaternary:#000000"
            >
          </lord-icon>
                    &lt;<span className="text-white">Pass</span><span className="text-green-400">One</span>/&gt;
                </h1>

                {/* Copyright */}
                <footer className="text-white text-center">
                    <p className="text-sm md:text-base">
                        &copy; {new Date().getFullYear()} PassOne. All rights reserved Suraj08
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default Footer
