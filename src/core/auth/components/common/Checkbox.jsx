import { Check } from "lucide-react";
import React, { useState } from "react";

const Checkbox = ({ label, register, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="group flex cursor-pointer items-center space-y-1 space-x-2">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          {...register}
          onChange={(e) => {
            setChecked(e.target.checked);
            register.onChange(e);
          }}
          {...props}
        />
        <div
          className={`h-5 w-5 rounded-md border-2 transition-all duration-300 ${
            checked
              ? "bg-blue-lighter shadow-lg"
              : "border-gray-500 group-hover:border-gray-400"
          }`}
        >
          {checked && (
            <Check
              size={12}
              className="absolute top-1 left-1 animate-pulse text-white"
            />
          )}
        </div>
      </div>
      <span className="text-sm text-gray-300 transition-colors duration-200 group-hover:text-white">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
