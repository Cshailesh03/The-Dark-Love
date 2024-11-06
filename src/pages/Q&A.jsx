import React, { useState } from 'react';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Question from '../components/Q&A/Question';
import ProgressBar from '../components/Q&A/ProgressBar';
import { getRandomQuestions, options } from '../data/questions';

function Question1() {
  const [questions] = useState(getRandomQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (value) => {
    setAnswers([...answers, { questionId: questions[currentQuestion].id, value }]);
    setTimeout(() => {
      setCurrentQuestion(prev => prev + 1);
    }, 300);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  if (currentQuestion >= questions.length) {
    const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-neutral-900 rounded-2xl shadow-2xl shadow-red-900/20 p-8 border border-red-900/20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <Sparkles className="w-16 h-16 text-red-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-center text-white mb-8"
          >
            Analysis Complete!
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="w-full h-6 bg-neutral-800 rounded-full overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-full bg-gradient-to-r from-red-700 to-red-500"
              />
            </div>
            <p className="text-center text-2xl font-semibold text-white">
              Your Score: {percentage}%
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center"
          >
            <button 
              onClick={handleRestart}
              className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white text-lg font-semibold rounded-xl 
                       hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/30 
                       hover:shadow-xl hover:shadow-red-900/40"
            >
              Take Test Again
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full mt-[10vh]">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mb-12"
        >
          <Brain className="w-16 h-16 text-red-500" />
        </motion.div>
        
        <ProgressBar 
          currentStep={currentQuestion + 1} 
          totalSteps={questions.length} 
        />

        <AnimatePresence mode="wait">
          <Question
            key={currentQuestion}
            question={questions[currentQuestion]}
            options={options}
            onAnswer={handleAnswer}
            category={questions[currentQuestion].category}
          />
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-neutral-400"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Select an answer to continue</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Question1;
