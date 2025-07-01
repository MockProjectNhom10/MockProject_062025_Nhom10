import React, { useState, useRef } from "react";

const state = ["New York", "California", "Florida", "Texas", "Illinois"];

export default function DropdownForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const handleChange = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleFocus = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div className="ssm:p-6 ssm:max-w-md ssm:mt-10 mx-auto mt-6 w-full max-w-xs rounded-lg bg-[#EEEEEE] p-4 shadow-md md:max-w-lg md:p-8 xl:max-w-2xl xl:p-10">
      <div className="flex flex-col gap-4">
        <div
          className="relative"
          ref={containerRef}
          tabIndex={0}
          onBlur={handleBlur}
          onFocus={handleFocus}
        >
          <button
            type="button"
            className="ssm:text-sm flex w-full max-w-[90vw] appearance-none items-center justify-between truncate rounded border border-gray-300 bg-white px-4 py-2 pr-8 text-xs whitespace-nowrap text-black focus:ring-2 focus:ring-blue-500 focus:outline-none md:text-base"
            onMouseDown={(e) => {
              e.preventDefault();
              handleFocus();
            }}
          >
            <span
              className={selectedOption ? "truncate" : "truncate text-gray-400"}
            >
              {selectedOption || "Select an option"}
            </span>
            <span className="ml-2 text-sm text-gray-600">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>
          {isOpen && (
            <ul
              className="ssm:text-sm absolute left-0 z-10 mt-1 max-h-56 w-full max-w-[90vw] overflow-auto rounded border border-gray-300 bg-white text-xs shadow-lg md:text-base"
              style={{ minWidth: "100%" }}
            >
              {state.map((option) => (
                <li
                  key={option}
                  className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                    selectedOption === option ? "bg-blue-100" : ""
                  } truncate`}
                  onMouseDown={() => handleChange(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
