import React from 'react';

// Button component
const Button = ({ children, className }) => {
  return (
    <button className={`${className} transition-colors duration-300`}>
      {children}
    </button>
  );
};

// ArrowRight icon component (you can replace this with any SVG icon)
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5"
  >
    <path d="M12 2l1.414 1.414L6.828 10H22v2H6.828l6.586 6.586L12 22l-10-10 10-10z" />
  </svg>
);

// Main PersonalityTest component
const PersonalityTest = () => {
  return (
    <section
      id="personality-test"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-900 to-black"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Discover Your <span className="text-red-600">Dark Persona</span>
        </h2>
        <p className="mb-8 text-gray-300 text-xl">
          Uncover the depths of your seductive potential with our exclusive personality test.
        </p>
        <Button className="bg-red-600 text-white rounded-xl font-bold py-3 px-8 text-lg transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 rounded-lg overflow-hidden">
          Take the Test
          {/* <ArrowRight className="ml-2" /> */}
        </Button>
      </div>
    </section>
  );
};

export default PersonalityTest;
