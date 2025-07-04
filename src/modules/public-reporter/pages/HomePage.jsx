import React from "react";
import Sliders from "@public-reporter/components/common/Sliders";
import Help from "@public-reporter/components/Help";
import HightLight from "@public-reporter/components/HightLight";
import { slider } from "@public-reporter/assets/index";

function HomePage() {
  const imageList = [slider, slider, slider];

  const slides = imageList.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Banner ${index + 1}`}
      className="h-[500px] w-full object-cover"
      loading="lazy"
    />
  ));

  return (
    <>
      <Sliders
        slides={slides}
        loop={true}
        className="rounded-lg"
        pagination={{ clickable: true }}
      />
      <Help />
      <HightLight />
    </>
  );
}

export default HomePage;
