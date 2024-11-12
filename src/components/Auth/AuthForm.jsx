import React from 'react';
import { Eye, EyeOff, Lock, Mail, User, Heart } from 'lucide-react';

const AuthForm = ({ activeTab, showPassword, setShowPassword }) => {
  return (
    <div className="space-y-6">
      {activeTab === 'login' ? (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            icon={<Mail className="w-5 h-5" />}
          />
          <FormField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5" />}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-red-200/70">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-red-900 bg-black/30 checked:bg-red-900 checked:border-red-900"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <button className="text-red-400 hover:text-red-300 transition-colors">
              Forgot Password?
            </button>
          </div>
          <button className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group">
            <span>Sign In</span>
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <FormField
            id="name"
            label="Full Name"
            placeholder="John Doe"
            icon={<User className="w-5 h-5" />}
          />
          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            icon={<Mail className="w-5 h-5" />}
          />
          <FormField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5" />}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <RoleSelection />
          <button className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group">
            <span>Create Account</span>
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
};

const FormField = ({ id, label, type = "text", placeholder, icon, showPassword, setShowPassword }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-red-200/90">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-300/60">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          className="block w-full pl-10 pr-3 py-2.5 text-white bg-black/30 border border-red-900/30 rounded-lg focus:ring-2 focus:ring-red-900/50 focus:border-transparent placeholder-red-200/30 transition-all duration-300"
          placeholder={placeholder}
          required
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword?.(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-300/60 hover:text-red-300/90"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

const RoleSelection = () => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-red-200/90">Account Type</label>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center p-3 bg-black/30 rounded-lg cursor-pointer hover:bg-red-950/30 transition-colors border border-red-900/30">
          <input
            type="radio"
            name="role"
            value="user"
            className="w-4 h-4 text-red-900 border-red-900/30 focus:ring-red-900/50"
            defaultChecked
          />
          <span className="ml-2 text-red-200">User</span>
        </label>
        <label className="flex items-center p-3 bg-black/30 rounded-lg cursor-pointer hover:bg-red-950/30 transition-colors border border-red-900/30">
          <input
            type="radio"
            name="role"
            value="expert"
            className="w-4 h-4 text-red-900 border-red-900/30 focus:ring-red-900/50"
          />
          <span className="ml-2 text-red-200">Expert</span>
        </label>
      </div>
    </div>
  );
};

export default AuthForm;
