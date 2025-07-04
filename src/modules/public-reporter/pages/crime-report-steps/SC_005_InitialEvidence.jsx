import React, { useState } from "react";
import FileUpload from "@public-reporter/components/common/FileUpload";
import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
// import Button from "@public-reporter/components/common/Button";
import Button from "@public-reporter/components/common/Button";

const evidenceTypes = [
  "Physical Evidence",
  "Biological Evidence",
  "Trace Evidence",
  "Documentary Evidence",
  "Digital evidence",
];

const SC_005 = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const [selectedEvidenceType, setSelectedEvidenceType] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Submitted files:", files);
  };

  return (
    <form onSubmit={handleCreate} className="space-y-6">
      <h2 className="mb-1 text-center text-2xl font-bold">Initial Evidence</h2>
      <p className="mb-8 text-center text-sm text-gray-500">
        This form is used to document the initial evidence connected to the
        incident.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Types of Evidence <span className="text-red-500">*</span>
          </label>
          <Listbox
            value={selectedEvidenceType}
            onChange={setSelectedEvidenceType}
          >
            <div className="relative">
              <ListboxButton className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-gray-600 focus:ring-2 focus:ring-blue-100 focus:outline-none">
                <span>{selectedEvidenceType || "Select an option"}</span>
                <svg
                  className="ml-2 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
                {evidenceTypes.map((item) => (
                  <ListboxOption key={item} value={item} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={`cursor-pointer list-none px-4 py-2 select-none ${active ? "bg-blue-100 text-blue-900" : "text-gray-900"} ${selected ? "font-semibold" : ""}`}
                      >
                        {item}
                      </li>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Evidence Location
          </label>
          <input
            type="text"
            placeholder="E.g., At the scene, in the car,..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Evidence Description
        </label>
        <textarea
          placeholder="Provide a clear and detailed description of the evidence (shape, material, identifying features...)"
          className="min-h-[100px] w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
        />
      </div>

      <FileUpload files={files} setFiles={setFiles} />

      <div className="mt-6 flex w-full flex-wrap justify-end gap-3 sm:gap-4">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="reporter" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default SC_005;
