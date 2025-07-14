import React, { forwardRef } from "react";

const TextArea = forwardRef(
  (
    {
      label,
      name,
      required = false,
      type = "text",
      rows = 5,
      placeholder = "",
      error = "",
      className = "",
      onChange,
      onBlur,
      value,
    },
    ref,
  ) => {
    return (
      <div className="mb-4 flex w-full flex-col">
        <label htmlFor={name} className="mb-1 text-[#141522]">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          type={type}
          rows={rows}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          className={`focus:ring-reporter rounded-md bg-[#eee] p-2 focus:ring-1 focus:outline-none ${error ? "border border-red-500" : "border border-gray-300"} ${className}`}
        />
        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  },
);

export default TextArea;
