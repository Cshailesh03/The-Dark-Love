import React from 'react';
import { Heart } from 'lucide-react';

const AuthHeader = () => {
  return (
    <div className="p-8 text-center relative z-10">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <Heart className="w-16 h-16 text-red-600 animate-pulse-slow" fill="rgba(220, 38, 38, 0.3)" />
          <div className="absolute inset-0 blur-sm bg-red-600/20 rounded-full animate-pulse"></div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">The Dark Love</h2>
      <p className="text-red-300/80">
        Where passion meets darkness
      </p>
    </div>
  );
};

export default AuthHeader;
