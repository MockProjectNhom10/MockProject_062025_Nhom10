import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  classNameChildren = "",
  variant = "primary",
  disabled = false,
}) => {
  let variantClass = "";

  switch (variant) {
    case "primary":
      variantClass = "bg-police text-white hover:bg-police-hover";
      break;
    case "secondary":
      variantClass = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "danger":
      variantClass = "bg-red-600 text-white hover:bg-red-700";
      break;
    case "outline":
      variantClass = "border border-gray-500 text-gray-800 hover:bg-gray-100";
      break;
    case "ghost":
      variantClass = "text-gray-800 hover:bg-gray-100";
      break;
    case "chief":
      variantClass = "bg-chief text-white hover:brightness-90";
      break;
    case "reporter":
      variantClass = "bg-reporter text-white hover:brightness-90";
      break;
    default:
      variantClass = "bg-blue-600 text-white hover:bg-blue-700";
  }

  const baseClass =
    "cursor-pointer rounded-lg px-4 py-2 font-semibold transition duration-200";

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass} ${disabledClass} ${className}`}
    >
      <div className={`text-xs ${classNameChildren}`}>{children}</div>
    </button>
  );
};

export default Button;
