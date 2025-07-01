import React from "react";

const Link = ({ children, className = "", ...props }) => {
  return (
    <a
      className={`text-blue-400 hover:text-blue-300 transition-all duration-200 hover:underline cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
