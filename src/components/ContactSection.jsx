import React from 'react';

// Input component
const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} py-3 px-4 rounded border transition-colors duration-300`}
    />
  );
};

// Button component
const Button = ({ children, type, className }) => {
  return (
    <button type={type} className={`${className} transition-colors duration-300`}>
      {children}
    </button>
  );
};

// Main ContactSection component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Join the <span className="text-red-600">Dark Side</span>
        </h2>
        <p className="mb-8 text-gray-300 text-xl">
          Ready to embrace your dark charisma? Sign up for exclusive tips and insights.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-white border border-red-600 text-black rounded-xl placeholder-gray-500 focus:border-red-400 transition-colors duration-300"
          />
          <Button type="submit" className="bg-red-600 text-white px-4 rounded-xl font-bold transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 rounded-lg overflow-hidden">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
