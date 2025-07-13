import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-2xl overflow-x-hidden rounded-xl bg-white shadow-lg">
        <div className="max-h-[90vh] w-full overflow-y-scroll p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
