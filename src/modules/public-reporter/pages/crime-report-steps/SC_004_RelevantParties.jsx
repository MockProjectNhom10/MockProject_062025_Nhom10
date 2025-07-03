import React, { useRef, useState } from "react";
import FileUpload from "../../components/FileUpload";
import { Listbox } from '@headlessui/react';
import { Fragment } from 'react';

const SC_004 = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const genderOptions = ["Male", "Female", "Unknown"];
  const relationshipToTheIncident = [
    "Victim",
    "Witness",
    "Suspect",
    "Accomplice",
  ];
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Submitted files:", files);
  };

  return (
    <form onSubmit={handleCreate} className="space-y-6">
      <h2 className="mb-1 text-center text-2xl font-bold">
        Relevant Parties
      </h2>
      <p className="mb-8 text-center text-sm text-gray-500">
        This form is used to document the roles and identities of all parties
        connected to the incident.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Full name
          </label>
          <input
            type="text"
            placeholder="E.g., John Michael Doe"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Relationship to the incident{" "}
            <span className="text-red-500">*</span>
          </label>
          <Listbox value={selectedRelationship} onChange={setSelectedRelationship}>
            <div className="relative">
              <Listbox.Button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-left text-gray-600 bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none flex items-center justify-between">
                <span>{selectedRelationship || "Select an option"}</span>
                <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
                {relationshipToTheIncident.map((item) => (
                  <Listbox.Option
                    key={item}
                    value={item}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`list-none cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'} ${selected ? 'font-semibold' : ''}`}
                      >
                        {item}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Gender</label>
          <Listbox value={selectedGender} onChange={setSelectedGender}>
            <div className="relative">
              <Listbox.Button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-left text-gray-600 bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none flex items-center justify-between">
                <span>{selectedGender || "Select an option"}</span>
                <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
                {genderOptions.map((item) => (
                  <Listbox.Option
                    key={item}
                    value={item}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`list-none cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'} ${selected ? 'font-semibold' : ''}`}
                      >
                        {item}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Nationality
          </label>
          <input
            type="text"
            placeholder="E.g., American"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">
          Statement / Description
        </label>
        <textarea
          placeholder="Provide a clear and detailed description of what happened, including dates, times, locations, and people involved."
          className="min-h-[100px] w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
        />
      </div>
      <FileUpload files={files} setFiles={setFiles} />
      <div className="mt-6 flex w-full flex-wrap justify-end gap-3 sm:gap-4">
        <button
          type="button"
          className="rounded-lg bg-gray-200 px-8 py-2 font-semibold text-gray-700"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-gray-900 px-8 py-2 font-semibold text-white"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default SC_004;
