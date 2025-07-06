import DragAndDropUpload from "@chief-police/components/layout/DragAndDropUpload";
import ConfigToaster from "@core/config/ConfigToaster";
import AppRouter from "@core/router/AppRouter";
import React from "react";
const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "video/mp4",
  "application/pdf",
  "image/vnd.adobe.photoshop",
  "application/postscript",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

function App() {
  return (
    <>
      {/* <AppRouter /> */}
      <DragAndDropUpload
        acceptedTypes={allowedTypes}
        maxFileSizeByMB={20} // MB
        maxFiles={5}
        onFilesChange={() => {}}
        browseText="Browse"
        showFileSize={true}
      />
      <ConfigToaster />
    </>
  );
}

export default App;
