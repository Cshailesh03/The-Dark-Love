import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as RoseIcon } from '../../assets/rose.svg'; // testingggg

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white bg-opacity-60 text-black shadow-md' : 'bg-black text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Enhanced Logo and Title */}
          <div className="flex items-center space-x-2 text-2xl font-bold">
            {/* Replace RoseIcon with a placeholder */}
            <div className="h-8 w-8 bg-red-500 rounded-full" /> {/* Temporary placeholder */}
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-black' : 'text-red-500'
              } hover:text-red-600 transition-colors duration-300`}
              style={{
                fontFamily: 'Bodoni MT, serif',
                letterSpacing: '0.05em',
              }}
            >
              The Dark Love
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-6">
              <Link to="/" className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}>Home</Link>
              <Link to="/about" className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}>About</Link>
              <Link to="/services" className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}>Services</Link>
              <Link to="/contact" className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}>Contact</Link>
            </nav>

            <div>
              <Link to="/login" className={`rounded-xl px-4 py-2 ${isScrolled ? 'bg-red-500 text-white' : 'bg-red-500 text-white hover:bg-red-600'} transition-colors duration-300`}>
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`${isScrolled ? 'bg-white' : 'bg-black'} md:hidden`}>
            <button onClick={() => handleNavigation('/')} className="block py-2 px-4 text-sm hover:bg-red-500">Home</button>
            <button onClick={() => handleNavigation('/about')} className="block py-2 px-4 text-sm hover:bg-red-500">About</button>
            <button onClick={() => handleNavigation('/services')} className="block py-2 px-4 text-sm hover:bg-red-500">Services</button>
            <button onClick={() => handleNavigation('/contact')} className="block py-2 px-4 text-sm hover:bg-red-500">Contact</button>
            <button onClick={() => handleNavigation('/login')} className="block py-2 px-4 text-sm bg-red-500 text-white hover:bg-red-600">Get Started</button>
          </div>
        )}
      </header>
    </>
  );
}
