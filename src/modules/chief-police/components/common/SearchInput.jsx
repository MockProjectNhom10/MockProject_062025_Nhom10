import React from "react";
import { Search } from "lucide-react";

const SearchInput = ({
  placeholder = "Search...",
  className = "",
  onChange,
  onBlur,
  value,
  name = "search",
}) => {
  return (
    <div
      className={`flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm ${className}`}
    >
      <Search className="mr-2 h-4 w-4 text-gray-500" />
      <input
        type="search"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
