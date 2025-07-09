import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import SC_019 from "@chief-police/pages/SC_019_AfterEdit";
import ConfigToaster from "@core/config/ConfigToaster";
import AppRouter from "@core/router/AppRouter";
import React from "react";

function App() {
  return (
    <>
      <AppRouter />
      <ConfigToaster />
    </>
  );
}

export default App;

// const allowedTypes = [
//   "image/jpeg",
//   "image/png",
//   "image/gif",
//   "video/mp4",
//   "application/pdf",
//   "image/vnd.adobe.photoshop",
//   "application/postscript",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//   "application/vnd.ms-powerpoint",
//   "application/vnd.openxmlformats-officedocument.presentationml.presentation",
// ];
