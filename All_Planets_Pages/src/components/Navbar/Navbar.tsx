import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-center items-center h-16 md:-mt-1 relative top-5 md:top-5 -mt-1 mb-8 bg-black">
      <div className="flex flex-wrap justify-between items-center w-full md:w-3/4 gap gap-x-5 h-12 bg-black border border-none rounded-full px-8 shadow-lg">
        <div className="flex justify-between items-center w-full md:w-auto">
          
          <button
            className="text-customWhite md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-wrap justify-center items-center w-full md:w-auto`}>
        <a href="/Clients" className="text-white font-bold mx-2 md:mx-4">Sun</a>
        <a href="/" className="text-white font-bold mx-2 md:mx-4">Mercury</a>
        <a href="/Portfolio" className="text-white font-bold mx-2 md:mx-4">Venus</a>
        <a href="/Joinus" className="text-white font-bold mx-2 md:mx-4">Earth</a>
        <a href="/mars" className="text-white font-bold mx-2 md:mx-4">Mars</a>
        <a href="/jupiter" className="text-white font-bold mx-2 md:mx-4">Jupiter</a>
        <a href="/service" className="text-white font-bold mx-2 md:mx-4">Saturn</a>
        <a href="/uranus" className="text-white font-bold mx-2 md:mx-4">Uranas</a>
        <a href="/contact" className="text-white font-bold mx-2 md:mx-4">Neptune</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
