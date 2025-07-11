import React from "react";

const FormSection = ({ title, children }) => {
  return (
    <section className="mb-6 w-full rounded-xl border-1 border-gray-200 bg-white shadow-md">
      <div className="bg-police mb-2 flex items-center justify-center rounded-t-xl py-2">
        <h2 className="text-md font-semibold text-white">{title}</h2>
      </div>

      <div className="mobile:px-1 tablet:px-2 desktop:px-5 mb-4 space-y-2">
        {children}
      </div>
    </section>
  );
};

export default FormSection;
