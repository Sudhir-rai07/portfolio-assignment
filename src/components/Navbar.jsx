// src/components/Navbar.jsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({themeFn, theme}) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-700 shadow-md">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <a href="/" className="text-2xl font-semibold text-black">Sudhir</a>
        <div className='flex items-center text-lg font-semibold text-gray-300'>
          <a href="#about" className="mx-2 hover:text-blue-500">About</a>
          <a href="#portfolio" className="mx-2 hover:text-blue-500">Portfolio</a>
          <a href="#contact" className="mx-2 hover:text-blue-500">Contact</a>
          <a className="mx-2 cursor-pointer hover:text-blue-500" onClick={themeFn}>{theme ? <FaSun /> : <FaMoon />}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
