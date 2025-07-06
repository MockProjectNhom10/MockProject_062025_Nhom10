import { Download, RotateCw, Trash, X, ZoomIn, ZoomOut } from "lucide-react";
import React, { useEffect, useState } from "react";

const FilePreviewItem = ({
  show = false,
  onClose = () => {},
  onDelete = () => {},
  fileIndex = 0,
  fileList = [],
}) => {
  const [rotate, setRotate] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(fileIndex);

  const currentFile = fileList[currentIndex];

  useEffect(() => {
    setRotate(0);
    setZoom(1);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(fileIndex);
  }, [fileIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!show || !currentFile) return null;

  const getPreview = () => {
    const type = currentFile.type;

    const commonStyle = {
      transform: `scale(${zoom}) rotate(${rotate}deg)`,
      transition: "all 0.3s ease",
    };

    if (type.startsWith("image/")) {
      return (
        <img
          src={URL.createObjectURL(currentFile)}
          alt={currentFile.name}
          style={commonStyle}
          className="max-h-[60vh] max-w-full object-contain mx-auto"
        />
      );
    }

    if (type.startsWith("video/")) {
      return (
        <video
          controls
          src={URL.createObjectURL(currentFile)}
          className="max-h-[60vh] max-w-full mx-auto"
        />
      );
    }

    if (type === "application/pdf") {
      return (
        <iframe
          src={URL.createObjectURL(currentFile)}
          title="PDF Preview"
          className="w-full h-[60vh] border rounded"
        />
      );
    }

    return <p className="text-gray-600 text-center">Không thể preview</p>;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center bg-gray-300/10 backdrop-blur-sm"
    >
      {/* Modal nổi */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 w-full max-w-3xl mx-4 bg-white rounded-xl shadow-lg border p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Preview file:</p>
            <p>{currentFile.name}</p>
          </div>
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nội dung file */}
        <div className="flex items-center justify-center overflow-hidden max-h-[60vh] mb-4 bg-gray-100 rounded p-2">
          {getPreview()}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              onClick={() => setZoom(zoom + 0.2)}
            >
              <ZoomIn />
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              onClick={() => setZoom(Math.max(1, zoom - 0.2))}
            >
              <ZoomOut />
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              onClick={() => setRotate(rotate + 90)}
            >
              <RotateCw />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              className="p-2 text-blue-500 hover:bg-gray-200 rounded-full"
              onClick={() => {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(currentFile);
                a.download = currentFile.name;
                a.click();
              }}
            >
              <Download />
            </button>
            <button
              className="p-2 text-red-500 hover:bg-red-200 rounded-full"
              onClick={() => onDelete(currentIndex)}
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreviewItem;
