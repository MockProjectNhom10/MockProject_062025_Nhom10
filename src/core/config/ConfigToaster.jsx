import React from "react";
import { Toaster } from "react-hot-toast";

// Component Toaster with configuration
const ConfigToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 4000,
        style: {
          background: "#363636",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: "500",
          padding: "10px 12px",
        },
      }}
    />
  );
};

export default ConfigToaster;
