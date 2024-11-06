import React from 'react';
import { motion } from 'framer-motion';

function ProgressBar(props) {
  const { currentStep, totalSteps } = props;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <motion.span 
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-medium text-white"
        >
          Question {currentStep} of {totalSteps}
        </motion.span>
        <motion.span 
          key={`progress-${currentStep}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-medium text-red-500"
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
      <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-red-700 to-red-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
