import React from 'react';

const AuthTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex p-1 bg-black/40 rounded-lg backdrop-blur-sm">
      <button
        className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${
          activeTab === 'login'
            ? 'bg-red-900 text-white shadow-lg shadow-red-900/30'
            : 'text-red-300 hover:bg-red-950/50'
        }`}
        onClick={() => setActiveTab('login')}
      >
        Sign In
      </button>
      <button
        className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${
          activeTab === 'register'
            ? 'bg-red-900 text-white shadow-lg shadow-red-900/30'
            : 'text-red-300 hover:bg-red-950/50'
        }`}
        onClick={() => setActiveTab('register')}
      >
        Register
      </button>
    </div>
  );
};

export default AuthTabs;
