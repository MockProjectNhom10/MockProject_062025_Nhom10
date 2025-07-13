import React, { forwardRef } from "react";

const FormSelect = forwardRef(
  (
    {
      label,
      name,
      required = false,
      error = "",
      options = [],
      className = "",
      onChange,
      onBlur,
      value,
      placeholder = "Select an option",
    },
    ref,
  ) => {
    return (
      <div className="mb-4 flex w-full flex-col">
        <label htmlFor={name} className="mb-1 text-[#141522]">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <select
          id={name}
          name={name}
          ref={ref}
          //   required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`focus:ring-reporter rounded-md bg-[#eee] p-2 py-[10px] focus:ring-1 focus:outline-none ${
            error ? "border border-red-500" : "border border-gray-300"
          } ${className}`}
        >
          {!value && (
            <option value="" hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  },
);

export default FormSelect;
