import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
      {/* Header with fixed position */}
      <header className="bg-black text-white fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-red-500 hover:text-red-600">
              The Dark Love
            </Link>
          </div>

          {/* Desktop Navigation Links and CTA on the right */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-6">
              <Link to="/" className="text-white hover:text-red-500">Home</Link>
              <Link to="/about" className="text-white hover:text-red-500">About</Link>
              <Link to="/services" className="text-white hover:text-red-500">Services</Link>
              <Link to="/contact" className="text-white hover:text-red-500">Contact</Link>
            </nav>

            {/* Call to Action for desktop */}
            <div>
              <Link to="/login" className="bg-red-500 text-white rounded-xl px-4 py-2 hover:bg-red-600">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black">
            <button onClick={() => handleNavigation('/')} className="block py-2 px-4 text-sm hover:bg-red-500">Home</button>
            <button onClick={() => handleNavigation('/about')} className="block py-2 px-4 text-sm hover:bg-red-500">About</button>
            <button onClick={() => handleNavigation('/services')} className="block py-2 px-4 text-sm hover:bg-red-500">Services</button>
            <button onClick={() => handleNavigation('/contact')} className="block py-2 px-4 text-sm hover:bg-red-500">Contact</button>
            <button onClick={() => handleNavigation('/login')} className="block py-2 px-4 text-sm bg-red-500 text-white hover:bg-red-600">Get Started</button>
          </div>
        )}
      </header>

      {/* Red Line Below Header */}
      <div className="w-full h-px bg-red-500 mt-16"></div>
    </>
  );
}
