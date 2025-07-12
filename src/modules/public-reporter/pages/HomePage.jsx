import React from "react";
import Sliders from "@public-reporter/components/common/Sliders";

import { slider } from "@public-reporter/assets/index";
import slider1 from "@public-reporter/assets/slider1.jpg";
import slider2 from "@public-reporter/assets/slider2.jpg";
import slider3 from "@public-reporter/assets/slider3.jpg";
import slider4 from "@public-reporter/assets/slider4.jpg";
import Help from "@public-reporter/components/common/Help";
import HightLight from "@public-reporter/components/common/HightLight";

function HomePage() {
  const imageList = [slider, slider1, slider2, slider3, slider4];

  const slides = imageList.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Banner ${index + 1}`}
      className="mobile:h-[200px] tablet:h-[400px] desktop:h-[600px] h-[300px] w-full object-cover"
      loading="lazy"
    />
  ));

  return (
    <div className="mt-8 bg-gray-50">
      <Sliders
        slides={slides}
        loop={true}
        className="rounded-lg"
        pagination={{ clickable: true }}
      />
      <Help />
      <HightLight />
    </div>
  );
}

export default HomePage;
