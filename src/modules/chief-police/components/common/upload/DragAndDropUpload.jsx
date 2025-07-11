import React, { useState } from "react";
import { Eye, Trash, UploadCloud } from "lucide-react";
import FilePreviewItem from "@chief-police/components/common/upload/FilePreviewItem";
import { useToast } from "@core/hooks/useToast";

const DragAndDropUpload = ({
  acceptedTypes = [],
  maxFileSizeByMB = 10, // MB
  maxFiles = 5,
  onFilesChange = () => {},
  browseText = "Browse",
  showFileSize = true,
}) => {
  const [files, setFiles] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const { showSuccess, showError, showWarning, showInfo } = useToast();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    processFiles(selectedFiles);
  };

  const processFiles = (selectedFiles) => {
    const validFiles = [];
    const errorFiles = [];

    selectedFiles.forEach((file) => {
      const isValidType =
        acceptedTypes.length === 0 || acceptedTypes.includes(file.type);
      const isValidSize = file.size / 1024 / 1024 <= maxFileSizeByMB;

      if (isValidType && isValidSize) {
        validFiles.push(file);
      } else {
        errorFiles.push(file);
      }
    });

    if (errorFiles.length > 0) {
      const names = errorFiles.map((f) => f.name).join(", ");
      showError(`File không hợp lệ: ${names}`);
    }

    // Tránh vượt quá số lượng
    const newFiles = [...files, ...validFiles];
    if (newFiles.length > maxFiles) {
      const allowedFiles = newFiles.slice(0, maxFiles);
      showWarning(`Chỉ cho phép tối đa ${maxFiles} file.`);
      setFiles(allowedFiles);
      onFilesChange(allowedFiles);
    } else {
      setFiles(newFiles);
      onFilesChange(newFiles);
      if (validFiles.length > 0) {
        const names = validFiles.map((f) => f.name).join(", ");
        showSuccess(`Upload thành công: ${names}`);
      }
    }
  };

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesChange(updated);
    showInfo("Đã xoá file.");
  };

  const previewFile = (index) => {
    setSelectedIndex(index);
    setPreviewOpen(true);
  };

  const handleDeleteFromPreview = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesChange(updated);
    setPreviewOpen(false);
    showInfo("Đã xoá file trong preview.");
  };

  const renderQuickPreview = (file) => {
    if (!file) return null;

    const type = file.type;
    const url = URL.createObjectURL(file);

    if (type.startsWith("image/")) {
      return (
        <img
          src={url}
          alt={file.name}
          className="object-fit h-40 w-40 rounded-lg border shadow-md"
        />
      );
    }

    if (type.startsWith("video/")) {
      return (
        <video
          src={url}
          muted
          className="object-fit h-40 w-40 rounded-lg border shadow-md"
        />
      );
    }
    return <></>;
  };

  return (
    <div className="mx-auto mt-10 mb-4 min-h-[260px] w-full max-w-xl rounded-xl border-2 border-dashed border-gray-400 p-2">
      <div
        className="mt-6 flex h-48 cursor-pointer flex-col items-center justify-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <UploadCloud className="h-12 w-12 text-indigo-500" strokeWidth={0.8} />
        <div className="mt-4 flex flex-row space-x-1 text-sm">
          <p className="font-semibold text-black">Drag & drop files or </p>

          <p className="font-semibold text-purple-800 underline">
            {""} {browseText}
          </p>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Max file size: {maxFileSizeByMB} MB, Max files: {files.length}/
          {maxFiles}
        </p>
        <input
          id="fileInput"
          type="file"
          multiple
          hidden
          onChange={handleFileSelect}
        />
      </div>

      <div className="mt-6">
        {files.map((file, index) => (
          <div
            key={index}
            className="mb-2 flex items-center justify-between rounded border p-2"
          >
            <div>
              <p
                className="relative cursor-pointer font-semibold"
                onClick={() => previewFile(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {file.name}
                {hoverIndex === index && (
                  <div className="absolute -top-25 -left-50 z-50 ml-2">
                    {renderQuickPreview(file)}
                  </div>
                )}
              </p>
              {showFileSize && (
                <p className="text-sm text-gray-500">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              )}
            </div>
            <div className="mr-4 flex flex-row space-x-5">
              <button
                className="cursor-pointer rounded-full text-blue-500"
                onClick={() => previewFile(index)}
              >
                <Eye size={18} />
              </button>
              <button
                className="cursor-pointer text-red-500"
                onClick={() => removeFile(index)}
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <FilePreviewItem
        fileList={files}
        fileIndex={selectedIndex}
        show={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onDelete={handleDeleteFromPreview}
      />
    </div>
  );
};

export default DragAndDropUpload;
