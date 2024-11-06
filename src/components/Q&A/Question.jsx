import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 }
};

function Question(props) {
  const { question, options, onAnswer, category } = props;

  return (
    <motion.div 
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="bg-neutral-900 rounded-2xl shadow-2xl shadow-red-900/20 p-8 border border-red-900/20"
    >
      <div className="mb-6">
        <span className="text-sm font-medium text-red-500 bg-red-950/30 px-4 py-2 rounded-full">
          {category}
        </span>
      </div>
      <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
        {question.text}
      </h2>
      <div className="space-y-4">
        {options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(option.value)}
            className="w-full text-left p-5 rounded-xl border border-neutral-800 hover:border-red-500/50 
                     hover:bg-red-950/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-neutral-700 group-hover:border-red-500 
                            flex items-center justify-center transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300"></div>
              </div>
              <span className="text-lg text-neutral-300 group-hover:text-white transition-colors duration-300">
                {option.text}
              </span>
            </div>
            <div className="absolute inset-0 bg-red-950/10 transform origin-left scale-x-0 
                          group-hover:scale-x-100 transition-transform duration-300 -z-10"></div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default Question;
