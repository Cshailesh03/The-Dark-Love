import React, { useState } from 'react';
import AuthHeader from '../components/Auth/AuthHeader';
import AuthTabs from '../components/Auth/AuthTabs';
import AuthForm from '../components/Auth/AuthForm';
import AuthFooter from '../components/Auth/AuthFooter';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 heart-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-black"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className={`backdrop-blur-sm bg-black/40 rounded-2xl shadow-2xl overflow-hidden border border-red-900/30 transition-all duration-300 ${
          activeTab === 'register' ? 'pt-10' : 'pt-6'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-950/50 to-black/50"></div>
            <AuthHeader />
          </div>
          <div className={`p-8 space-y-6 transition-all duration-300 ${
            activeTab === 'register' ? 'mt-6' : 'mt-2'
          }`}>
            <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <AuthForm 
              activeTab={activeTab} 
              showPassword={showPassword} 
              setShowPassword={setShowPassword} 
            />
            <AuthFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
