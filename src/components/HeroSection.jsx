import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import websiteImage from "/src/assets/website.jpg"; // Adjust path as needed
import '../index.css';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-red-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 -mt-4 md:-mt-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white animate-bounce-in">
            <span className="block text-10xl md:text-10xl mb-2 text-white">Unlock Your</span>
            <span className="text-red-600">Dark Charisma</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto md:mx-0 text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
            Master the art of seduction and unleash your inner magnetism.
          </p>
          <button
            onClick={handleNavigation}
            className="flex items-center bg-red-600 text-white font-bold py-3 px-8 text-lg rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 rounded-lg overflow-hidden"
          >
            Begin Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md relative animate-float py-8 " >
            <img
              src={websiteImage}
              alt="An artistic representation of dark charisma"
              className="object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Background Animations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-10 transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 opacity-10 transform -rotate-45 animate-pulse animation-delay-500"></div>
    </section>
  );
}
