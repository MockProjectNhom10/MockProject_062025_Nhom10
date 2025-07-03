import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm">
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl mx-4 overflow-x-hidden">
        <div className="p-6 overflow-y-scroll max-h-[90vh] w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 