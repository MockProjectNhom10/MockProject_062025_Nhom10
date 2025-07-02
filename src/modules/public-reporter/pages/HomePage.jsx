import React from "react";
import Content from "@public-reporter/components/Content";
import Sliders from "@public-reporter/components/Sliders";
import Help from "@public-reporter/components/Help";
import HightLight from "@public-reporter/components/HightLight";
function App() {
  return (
    <>
      <Content>
        <Sliders />
        <Help />
        <HightLight />
      </Content>
    </>
  );
}

export default App;
