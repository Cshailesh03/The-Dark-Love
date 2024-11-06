import React from "react";

export default function Explore() {
  // Define the improvementAreas array here
  const improvementAreas = [
    {
      id: 1,
      title: "Build Confidence",
      description: "Overcome self-doubt and gain confidence.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Control Emotions",
      description: "Master emotional regulation and keep your cool.",
      icon: () => (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
      ),
    },
    {
      id: 3,
      title: "Develop Charisma",
      description: "Learn how to be captivating and magnetic.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Strengthen Bonds",
      description: "Build deeper emotional connections.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Master Attraction",
      description: "Develop the skills of seduction.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.527 0-10-4.473-10-10S6.473 2 12 2s10 4.473 10 10-4.473 10-10 10z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Overcome Anxiety",
      description: "Manage social anxiety and improve interactions.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.478 22 2 17.522 2 12S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="areas"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-red-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Master These <span className="text-red-600">Dark Arts</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {improvementAreas.map((area) => (
            <div
              key={area.id}
              className="bg-black border border-red-600 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {area.title}
                </h3>
                <p className="text-white">{area.description}</p>
              </div>
              <div className="p-4">
                <button className="w-full border border-red-600 text-red-600 bg-white hover:bg-red-600 hover:text-white transition-colors duration-300 py-2 rounded">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
