import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-red-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-red-600 mb-4 md:mb-0">TheDarkLove</div>
        <nav className="flex flex-wrap justify-center gap-6">
          {['Home', 'Areas', 'How It Works', 'Personality Test', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase().replace(' ', '-')}`} // Use 'to' for react-router
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-8 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} TheDarkLove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
