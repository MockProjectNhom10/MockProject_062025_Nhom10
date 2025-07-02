import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({ label, type = "text", error, register, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="mb-6">
      <label className="mb-3 block text-sm font-semibold text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          className={`text-md w-full rounded-2xl border bg-gray-800/50 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 ${
            focused
              ? "border-blue-500 bg-gray-800/70 shadow-lg shadow-blue-500/20"
              : "border-gray-600"
          } ${
            error ? "border-red-500 shadow-lg shadow-red-500/20" : ""
          } focus:outline-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...register}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400 transition-colors duration-200 hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 animate-pulse text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
