import React from "react";
import { PlusCircle } from "lucide-react";
import FormCard from "./FormCard";

const officers = [
  { name: "Brandie", role: "Patrol Officer", phone: "(225) 555-0118" },
  { name: "Brandie", role: "Patrol Officer", phone: "(225) 555-0118" },
  { name: "Brandie", role: "Detective", phone: "(225) 555-0118" },
];

const FormSection = () => {
  return (
    <div className="mt-4 min-w-full rounded-md border border-blue-300 p-2 sm:max-w-2xl md:max-w-3xl md:p-4 lg:p-8">
      <div className="mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <h2 className="text-base font-semibold sm:text-lg lg:text-xl">
          LIST OF OFFICERS ASSIGNED TO THE SCENE
        </h2>
        <button className="flex items-center gap-1 rounded bg-gray-100 px-3 py-1 text-gray-700 shadow hover:bg-gray-200 sm:px-4 sm:py-1.5 lg:px-6 lg:py-2">
          ADD <PlusCircle size={18} />
        </button>
      </div>
      <FormCard officers={officers} />
    </div>
  );
};

export default FormSection;
