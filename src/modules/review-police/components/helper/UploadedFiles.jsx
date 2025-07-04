// src/components/UploadedFiles.jsx
import React from "react";
import { FileText } from "lucide-react";

export default function UploadedFiles({ files }) {
  return (
    <div className="mt-6">
      <h4 className="mb-3 text-sm font-medium text-gray-700">Uploaded:</h4>
      {files?.length > 0 ? (
        <div className="mobile:grid-cols-2 desktop:grid-cols-3 grid grid-cols-1 gap-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 p-3"
            >
              <div className="flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-red-500">
                  <FileText size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {file.size} · {file.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm text-gray-700">No files uploaded.</div>
      )}
    </div>
  );
}
