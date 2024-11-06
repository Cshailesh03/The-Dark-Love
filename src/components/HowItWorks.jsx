import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">
          Embrace the <span className="text-red-600">Darkness</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: 1, title: 'Choose Your Path', description: 'Select the dark arts you wish to master.' },
            { step: 2, title: 'Learn from Shadow Masters', description: 'Connect with our expert advisors.' },
            { step: 3, title: 'Unleash Your Power', description: 'Apply your newfound skills in the real world.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
