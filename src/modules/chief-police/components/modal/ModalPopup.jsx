import React from "react";

export default function ModalPopup({
  isOpen,
  onClose,
  width = "w-[600px]",
  height = "h-auto",
  header,
  footer,
  headerClassName = "",
  footerClassName = "",
  children,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`rounded-xl bg-white shadow-lg ${width} ${height} relative p-6`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {header && (
          <div
            className={`mb-4 text-center text-xl font-semibold ${headerClassName}`}
          >
            {header}
          </div>
        )}

        {/* Body */}
        <div className="mb-4">{children}</div>

        {/* Footer */}
        {footer && <div className={`mt-4 ${footerClassName}`}>{footer}</div>}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg text-gray-400 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
