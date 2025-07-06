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
          {file.size}  {file.date}
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

// /**
//  * FileUpload component
//  * @param {Object} props
//  * @param {Array} props.files - Danh sách file
//  * @param {Function} props.setFiles - Hàm cập nhật danh sách file
//  * @param {string} [props.supportedFormats] - Chuỗi mô tả định dạng hỗ trợ
//  */
const FileUpload = ({
  files,
  setFiles,
  supportedFormats = "Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT",
}) => {
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

  return (
    <div>
      <label className="mb-2 block text-sm font-medium">Attachments</label>
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
        <p className="mt-1 text-xs text-gray-400">{supportedFormats}</p>
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
          <FileCard key={idx} file={file} onRemove={() => handleRemove(idx)} />
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
