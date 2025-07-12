import React from "react";

const FormInput = ({
  label,
  name,
  required = false,
  type = "text",
  placeholder = "",
  error = "",
  className = "",
  onChange,
  onBlur,
  value,
  disabled = false,
}) => {
  return (
    <div className="mb-4 flex w-full flex-col">
      <label htmlFor={name} className="mb-1 text-[#141522]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        className={`focus:ring-chief rounded-md bg-[#eee] p-2 text-xs focus:ring-1 focus:outline-none ${error ? "border border-red-500" : "border border-gray-300"} ${disabled ? "text-gray-400" : ""} ${className}`}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FormInput;
