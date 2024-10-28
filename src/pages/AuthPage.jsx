import React, { useState } from 'react';
import AuthHeader from '../components/Auth/AuthHeader';
import AuthTabs from '../components/Auth/AuthTabs';
import AuthForm from '../components/Auth/AuthForm';
import AuthFooter from '../components/Auth/AuthFooter';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-600 to-white text-black font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 border-red-600 shadow-lg shadow-red-500/20 rounded-lg overflow-hidden">
        <AuthHeader />
        <div className="p-4">
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AuthForm activeTab={activeTab} showPassword={showPassword} setShowPassword={setShowPassword} />
        </div>
        <AuthFooter />
      </div>
    </div>
  );
}