import React, { useState, useRef } from "react";
import FormInput from "../components/common/input/FormInput";
import Dropdown from "../components/common/dropdown/DropDown";
import TextArea from "../components/common/input/TextArea";
import Button from "../components/common/button/Button";

const roleOptions = [
  { label: "Witness", value: "witness" },
  { label: "Suspect", value: "suspect" },
];

const SC_022_ViewIntinalStatement = () => {

  const [witnessName, setWitnessName] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [statement, setStatement] = useState("");

  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...uploaded]);
    e.target.value = null;
  };

  const handleDeleteFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleAddStatement = () => {};
  const handleDeleteStatement = () => setStatement("");
  const handleFixStatement = () => {};


  const handleSave = () => {};
  const handleCancel = () => {};
  const handleNextPage = () => {};

 
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

  return (
    <div className="w-full bg-white rounded-lg shadow p-0 pb-6">
      <div className="rounded-t-lg bg-teal-500 py-3 text-center text-xl font-bold text-white">
        WITNESS STATEMENT DETAILS
      </div>
      <div className="p-6">
        {/* Witness information */}
        <div className="mb-6 rounded-lg border bg-gray-50 p-4">
          <div className="mb-4 text-lg font-semibold">Witness information</div>
          <div className="grid grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            <FormInput
              label="Witness name"
              name="witnessName"
              value={witnessName}
              onChange={e => setWitnessName(e.target.value)}
            />
            <div>
              <label className="mb-1 block text-[#141522]">Date</label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full rounded-md bg-[#eee] p-2 border border-gray-300"
              />
            </div>
            <FormInput
              label="Contact information"
              name="contactInfo"
              value={contact}
              onChange={e => setContact(e.target.value)}
            />
            <Dropdown
              label="Role"
              name="role"
              value={role}
              onChange={e => setRole(e.target.value)}
              options={roleOptions}
            />
          </div>
        </div>
        {/* Detailed statement */}
        <div className="mb-6 rounded-lg border bg-gray-50 p-4">
          <div className="mb-2 text-lg font-semibold">Detailed statement</div>
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <label className="font-medium text-gray-700">Content of the statement</label>
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
              <Button variant="outline" onClick={handleAddStatement}>Add</Button>
              <Button variant="outline" onClick={handleDeleteStatement}>Delete</Button>
              <Button variant="outline" onClick={handleFixStatement}>Fix</Button>
            </div>
          </div>
          <TextArea
            name="statementContent"
            value={statement}
            onChange={e => setStatement(e.target.value)}
            rows={6}
            className="w-full"
          />
        </div>
        {/* Evidence Link */}
        <div className="mb-6 rounded-lg border bg-gray-50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-lg font-semibold">Evidence Link</span>
            <Button variant="secondary" onClick={() => fileInputRef.current && fileInputRef.current.click()}>Upload file</Button>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 mt-2">
            {files.length === 0 && (
              <span className="text-gray-400 italic col-span-3">No files uploaded.</span>
            )}
            {files.map((file, idx) => {
              const { label, color } = getFileTypeLabel(file.name);
              return (
                <div key={idx} className="flex w-full max-w-xs items-center gap-3 truncate rounded-lg bg-[#F6F6F6] px-4 py-3 text-sm relative">
                  <div className={`rounded px-2 py-1 text-xs font-bold ${color}`}>{label}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium text-gray-700">{file.name}</div>
                    <div className="truncate text-xs text-gray-400">
                      {(file.size/1024).toFixed(1)} KB &nbsp; {file.lastModified ? new Date(file.lastModified).toLocaleDateString("en-GB", {day: "2-digit", month: "short", year: "numeric"}) : ""}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteFile(idx)}
                    className="text-gray-400 hover:text-red-500 absolute top-2 right-2"
                    title="Delete file"
                  >
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {/* Action buttons */}
        {/* <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
          <Button variant="chief" onClick={handleNextPage}>Next page</Button>
        </div> */}
      </div>
    </div>
  );
};

export default SC_022_ViewIntinalStatement;
