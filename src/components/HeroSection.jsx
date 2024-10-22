import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import websiteImage from "/src/assets/website.jpg"; // Adjust path as needed

export default function HeroSection() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  };

  return (
    <section className="relative py-0 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="flex w-full h-full">
        {/* Left Section: Text */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
              Unlock Your <span className="text-red-600">Dark Charisma</span>
            </h1>
            <p className="text-xl mb-6">
              Master the art of seduction and unleash your inner magnetism.
            </p>
            <button
              onClick={handleNavigation}
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-300 ease-in-out"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={websiteImage}
            alt="An artistic representation of dark charisma"
            className="h-3/4 w-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
