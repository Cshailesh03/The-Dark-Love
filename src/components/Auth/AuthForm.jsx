import React from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

const AuthForm = ({ activeTab, showPassword, setShowPassword }) => {
  return (
    <>
      {activeTab === 'login' && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <FormField
              id="email-login"
              label="Email"
              type="email"
              placeholder="m@example.com"
              icon={<Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
            />
            <FormField
              id="password-login"
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={<Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <RoleSelection />
          </div>
          <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 rounded">
            Login
          </button>
        </form>
      )}

      {activeTab === 'register' && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <FormField
              id="name-register"
              label="Name"
              placeholder="John Doe"
              icon={<User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
            />
            <FormField
              id="email-register"
              label="Email"
              type="email"
              placeholder="m@example.com"
              icon={<Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
            />
            <FormField
              id="password-register"
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={<Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <RoleSelection />
          </div>
          <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 rounded">
            Register
          </button>
        </form>
      )}
    </>
  );
};

const FormField = ({ id, label, type = "text", placeholder, icon, showPassword, setShowPassword }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-white">{label}</label>
    <div className="relative">
      {icon}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        className="w-full bg-gray-700 border-gray-600 text-white pl-10 p-2 rounded focus:border-red-500 focus:ring-red-500"
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute right-2 top-2 h-8 w-8 text-gray-400 hover:text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      )}
    </div>
  </div>
);

const RoleSelection = () => (
  <div className="space-y-2">
    <label className="text-white">Role</label>
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2">
        <input type="radio" id="user" name="role" value="user" defaultChecked className="text-red-500" />
        <label htmlFor="user" className="text-white">User</label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="radio" id="expert" name="role" value="expert" className="text-red-500" />
        <label htmlFor="expert" className="text-white">Expert</label>
      </div>
    </div>
  </div>
);

export default AuthForm;
