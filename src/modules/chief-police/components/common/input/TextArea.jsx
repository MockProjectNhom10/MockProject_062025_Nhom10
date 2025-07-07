import React from "react";

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  rows = 5,
  disabled = false,
  error = "",
  className = "",
}) => {
  const baseClass =
    "w-full rounded-lg border px-4 py-2 text-sm transition duration-200 focus:outline-none";
  const enabledClass =
    "border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600";
  const disabledClass = "opacity-50 cursor-not-allowed bg-gray-100";
  const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-500";

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseClass} ${
          error ? errorClass : enabledClass
        } ${disabled ? disabledClass : ""}`}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default TextArea;
