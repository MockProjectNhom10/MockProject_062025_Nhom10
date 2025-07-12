import React from "react";

const FormCard = ({
  title,
  button,
  children,
  action,
  className,
  classNameHeader,
}) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-gray-50 p-4 ${className}`}
    >
      {(title || button) && (
        <div
          className={`mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ${classNameHeader}`}
        >
          {title && (
            <h3 className="text-xs font-semibold text-gray-600">{title}</h3>
          )}
          {button && <div className="shrink-0">{button}</div>}
        </div>
      )}

      <div className="overflow-x-auto">{children}</div>

      {action && <div className="mt-4 flex justify-end">{action}</div>}
    </div>
  );
};

export default FormCard;
