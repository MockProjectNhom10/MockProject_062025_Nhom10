import ActionButtons from "@chief-police/components/common/button/Action";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import ConfigToaster from "@core/config/ConfigToaster";
import AppRouter from "@core/router/AppRouter";
import React, { useEffect, useState } from "react";

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
