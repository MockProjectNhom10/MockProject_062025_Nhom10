import React, { useState, useRef } from "react";

const relationshipToTheIncident = [
  "Victim",
  "Witness",
  "Suspect",
  "Accomplice",
];

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
    <div className="bg-[#EEEEEE] p-4 ssm:p-6 md:p-8 xl:p-10 rounded-lg shadow-md w-full max-w-xs ssm:max-w-md md:max-w-lg xl:max-w-2xl mx-auto mt-6 ssm:mt-10">
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
            className="w-full max-w-[90vw] text-xs ssm:text-sm md:text-base appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center truncate whitespace-nowrap"
            onMouseDown={(e) => {
              e.preventDefault();
              handleFocus();
            }}
          >
            <span
              className={selectedOption ? "truncate" : "text-gray-400 truncate"}
            >
              {selectedOption || "Select an option"}
            </span>
            <span className="ml-2 text-gray-600 text-sm">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>
          {isOpen && (
            <ul
              className="absolute left-0 z-10 mt-1 w-full max-w-[90vw] bg-white border border-gray-300 rounded shadow-lg max-h-56 overflow-auto text-xs ssm:text-sm md:text-base"
              style={{ minWidth: "100%" }}
            >
              {relationshipToTheIncident.map((option) => (
                <li
                  key={option}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
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
