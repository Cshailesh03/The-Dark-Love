import React from 'react';

const AuthTabs = ({ activeTab, setActiveTab }) => (
  <div className="w-full mb-4 grid grid-cols-2">
    <button
      className={`text-white py-2 w-full ${activeTab === 'login' ? 'bg-red-500' : ''}`}
      onClick={() => setActiveTab('login')}
    >
      Login
    </button>
    <button
      className={`text-white py-2 w-full ${activeTab === 'register' ? 'bg-red-500' : ''}`}
      onClick={() => setActiveTab('register')}
    >
      Register
    </button>
  </div>
);

export default AuthTabs;
