import React from "react";

const Button = ({
  content,
  color = "bg-gray-500",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer rounded-lg px-8 py-1.5 text-white transition-all hover:opacity-90 ${color} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
