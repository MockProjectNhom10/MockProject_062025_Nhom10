import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children, width = "max-w-lg" }) => {
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={`w-full rounded-2xl bg-white shadow-xl ${width} animate-fadeIn relative p-6`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        {/* Title */}
        {title && (
          <h2 className="mb-4 text-xl font-semibold text-gray-800">{title}</h2>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
