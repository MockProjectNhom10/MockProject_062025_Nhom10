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
