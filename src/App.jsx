import ConfigToaster from "@core/config/ConfigToaster";
import AppRouter from "@core/router/AppRouter";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Sliders from "./components/Sliders";
import Help from "./components/Help";
import HightLight from "./components/HightLight";
function App() {
  return (
    <>
      <Header />
      <Content>
        <Sliders />
        <Help />
        <HightLight />
      </Content>
      <Footer />
      {/* <AppRouter />
      <ConfigToaster /> */}
    </>
  );
}

export default App;
