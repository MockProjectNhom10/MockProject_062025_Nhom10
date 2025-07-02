import React, { useRef, useState } from "react";

const FILE_TYPE_LABELS = {
  pdf: { label: "PDF", color: "bg-red-100 text-red-500" },
  png: { label: "PNG", color: "bg-blue-100 text-blue-500" },
  jpg: { label: "JPG", color: "bg-yellow-100 text-yellow-600" },
  jpeg: { label: "JPG", color: "bg-yellow-100 text-yellow-600" },
  gif: { label: "GIF", color: "bg-pink-100 text-pink-500" },
  mp4: { label: "MP4", color: "bg-purple-100 text-purple-500" },
  doc: { label: "DOC", color: "bg-blue-100 text-blue-700" },
  docx: { label: "DOCX", color: "bg-blue-100 text-blue-700" },
  ppt: { label: "PPT", color: "bg-orange-100 text-orange-500" },
  pptx: { label: "PPTX", color: "bg-orange-100 text-orange-500" },
  xls: { label: "XLS", color: "bg-green-100 text-green-600" },
  xlsx: { label: "XLSX", color: "bg-green-100 text-green-600" },
  ai: { label: "AI", color: "bg-gray-200 text-gray-700" },
  psd: { label: "PSD", color: "bg-indigo-100 text-indigo-500" },
  default: { label: "FILE", color: "bg-gray-200 text-gray-700" },
};

function getFileTypeLabel(filename) {
  if (!filename) return FILE_TYPE_LABELS.default;
  const ext = filename.split(".").pop().toLowerCase();
  return FILE_TYPE_LABELS[ext] || FILE_TYPE_LABELS.default;
}

const SC_004 = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();

  const handleRemove = (idx) => {
    setFiles(files.filter((_, i) => i !== idx));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.name) {
      const newFile = {
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      };
      setFiles((prev) => [...prev, newFile]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.value = null;
    fileInputRef.current.click();
  };

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Submitted files:", files);
  };

  const genderOptions = ["Male", "Female", "Unknown"];
  const relationshipToTheIncident = [
    "Victim",
    "Witness",
    "Suspect",
    "Accomplice",
  ];

  return (
    <div className="flex min-h-screen w-screen items-start justify-center bg-[#FAFAFA] px-4 py-8">
      <div className="max-h-[calc(100vh-4rem)] w-full max-w-3xl overflow-auto rounded-2xl border border-gray-200 bg-white p-6 shadow sm:p-10">
        <h2 className="mb-1 text-center text-2xl font-bold">
          Relevant Parties
        </h2>
        <p className="mb-8 text-center text-sm text-gray-500">
          This form is used to document the roles and identities of all parties
          connected to the incident.
        </p>

        <form onSubmit={handleCreate} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full name
              </label>
              <input
                type="text"
                placeholder="E.g., John Michael Doe"
                className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Relationship to the incident{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                {relationshipToTheIncident.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Gender</label>
              <select
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                {genderOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Nationality
              </label>
              <input
                type="text"
                placeholder="E.g., American"
                className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Statement / Description
            </label>
            <textarea
              placeholder="Provide a clear and detailed description of what happened, including dates, times, locations, and people involved."
              className="min-h-[100px] w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Attachments
            </label>
            <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 px-4 py-8 text-center">
              <svg
                width="48"
                height="48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 34V14M24 14l-6 6m6-6l6 6"
                  stroke="#A3AED0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="4"
                  y="4"
                  width="40"
                  height="40"
                  rx="12"
                  stroke="#A3AED0"
                  strokeWidth="2"
                />
              </svg>
              <p className="mt-2 text-sm text-gray-500">
                Drag & drop files or{" "}
                <span
                  className="cursor-pointer font-medium text-blue-600"
                  onClick={handleUploadClick}
                >
                  Browse
                </span>
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                multiple={false}
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={handleUploadClick}
                className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700"
              >
                Upload file
              </button>
            </div>
            <div className="mt-4 flex w-full flex-wrap gap-3 sm:gap-4">
              {files.map((file, idx) => (
                <FileCard
                  key={idx}
                  file={file}
                  onRemove={() => handleRemove(idx)}
                />
              ))}
            </div>
            <div className="mt-6 flex w-full flex-wrap justify-end gap-3 sm:gap-4">
              <button
                type="button"
                className="rounded-lg bg-gray-200 px-8 py-2 font-semibold text-gray-700"
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
          </div>
        </form>
      </div>
    </div>
  );
};

const FileCard = ({ file, onRemove }) => {
  if (!file || !file.name) return null;
  const { label, color } = getFileTypeLabel(file.name || "");
  return (
    <div className="flex w-44 max-w-[180px] items-center gap-3 truncate rounded-lg bg-[#F6F6F6] px-4 py-3 text-sm">
      <div className={`rounded px-2 py-1 text-xs font-bold ${color}`}>
        {label}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate font-medium text-gray-700">{file.name}</div>
        <div className="truncate text-xs text-gray-400">
          {file.size} • {file.date}
        </div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="text-gray-400 hover:text-red-500"
      >
        <svg
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SC_004;
