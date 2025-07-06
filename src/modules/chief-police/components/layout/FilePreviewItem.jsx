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
  }, [onClose]);

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
          className="mx-auto max-h-[60vh] max-w-full object-contain"
        />
      );
    }

    if (type.startsWith("video/")) {
      return (
        <video
          controls
          src={URL.createObjectURL(currentFile)}
          className="mx-auto max-h-[60vh] max-w-full"
        />
      );
    }

    if (type === "application/pdf") {
      return (
        <iframe
          src={URL.createObjectURL(currentFile)}
          title="PDF Preview"
          className="h-[60vh] w-full rounded border"
        />
      );
    }

    return <p className="text-center text-gray-600">Không thể preview</p>;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center bg-gray-300/10 backdrop-blur-sm"
    >
      {/* Modal nổi */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 mx-4 w-full max-w-3xl rounded-xl border bg-white p-6 shadow-lg"
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Preview file:</p>
            <p>{currentFile.name}</p>
          </div>
          <button
            className="rounded-full p-2 hover:bg-gray-200"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nội dung file */}
        <div className="mb-4 flex max-h-[60vh] items-center justify-center overflow-hidden rounded bg-gray-100 p-2">
          {getPreview()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              className="rounded-full p-2 hover:bg-gray-200"
              onClick={() => setZoom(zoom + 0.2)}
            >
              <ZoomIn />
            </button>
            <button
              className="rounded-full p-2 hover:bg-gray-200"
              onClick={() => setZoom(Math.max(1, zoom - 0.2))}
            >
              <ZoomOut />
            </button>
            <button
              className="rounded-full p-2 hover:bg-gray-200"
              onClick={() => setRotate(rotate + 90)}
            >
              <RotateCw />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              className="rounded-full p-2 text-blue-500 hover:bg-gray-200"
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
              className="rounded-full p-2 text-red-500 hover:bg-red-200"
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
