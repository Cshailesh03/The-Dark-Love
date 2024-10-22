import React from 'react';

const AuthFooter = () => (
  <div className="p-4 flex flex-col space-y-4">
    <div className="text-sm text-gray-400 text-center">
      By continuing, you agree to our{' '}
      <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and{' '}
      <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>.
    </div>
  </div>
);

export default AuthFooter;
