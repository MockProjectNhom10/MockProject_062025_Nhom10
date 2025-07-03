import React, { useState } from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  const baseStyles =
    "relative overflow-hidden px-6 py-2 rounded-3xl font-normal cursor-pointer transition-all duration-300 transform ";
  const variants = {
    none: "bg-gradient-to-r from-blue-light to-blue-lighter  text-white shadow-lg shadow-blue-500/25 focus:ring-blue-light/50",
    primary:
      "bg-gradient-to-r from-blue-light to-blue-lighter hover:from-blue-light hover:to-blue-lightest text-white shadow-lg shadow-blue-500/25 focus:ring-blue-light/50",
    social:
      "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 shadow-lg hover:shadow-xl",
    transparent:
      "bg-transparent text-gray-300  hover:text-blue-light border border-gray-600  shadow-none hover:shadow-lg focus:ring-blue-light/50",
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <button
      onClick={(e) => {
        if (!disabled) {
          createRipple(e);
          onClick && onClick(e);
        }
      }}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "transform-none cursor-not-allowed opacity-50" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="bg-blue-lightest/30 pointer-events-none absolute rounded-full"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
            animation: "ripple 0.4s linear",
            transform: "scale(0)",
          }}
        />
      ))}
      {children}
    </button>
  );
};

export default Button;
