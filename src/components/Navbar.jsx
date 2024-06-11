import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import FAQ from './FAQ';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-indigo-800 dark:bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link to="/">Money Tracker App</Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/features" className="text-white hover:text-gray-300 transition duration-300">Features</Link>
          <Link to="/components/FAQ" className="text-white hover:text-gray-300 transition duration-300">FAQs</Link>
          <button
            onClick={toggleTheme}
            className="text-white hover:text-gray-300 transition duration-300 focus:outline-none"
          >
            {theme === 'dark' ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
