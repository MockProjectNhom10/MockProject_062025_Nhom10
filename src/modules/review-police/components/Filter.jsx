import React from "react";

function Filter() {
  return (
    <div className="flex flex-col items-stretch gap-3 py-2 mt-2 mb-5 bg-white rounded-xl sm:flex-row sm:justify-center sm:gap-8">
      {["All", "Status", "Crime Type", "Severity", "Created at"].map((label) => (
        <select
          key={label}
          className="w-full px-5 py-2 text-sm bg-gray-100 border sm:w-auto rounded-xl"
        >
          <option>{label}</option>
        </select>
      ))}
    </div>
  );
}

export default Filter;
