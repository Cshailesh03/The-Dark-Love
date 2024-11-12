import React from 'react';

const AuthFooter = () => {
  return (
    <div className="text-center text-sm text-red-200/50">
      <p>
        By continuing, you agree to our{' '}
        <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default AuthFooter;
