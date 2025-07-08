import React from "react";

const FormSection = ({ title, children }) => {
  return (
    <section className="w-full rounded-xl border-1 border-gray-200 bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between border-b pb-3">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      <div className="space-y-6">{children}</div>
    </section>
  );
};

export default FormSection;
