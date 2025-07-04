import React from "react";
import Sliders from "@public-reporter/components/common/Sliders";
import {
  highLight1,
  highLight2,
  highLight3,
} from "@public-reporter/assets/index";

const HightLight = () => {
  const items = [
    {
      image: highLight1,
      title: "CompStat & Crime Stats",
      desc: `Access crime statistics, traffic data, reports, and CompStat 2.0, an advanced digital crime-tracking system that delivers block-by-block data.`,
    },
    {
      image: highLight2,
      title: "Body-worn Cameras",
      desc: `Body-worn cameras have come to the NYPD. What you need to know.`,
    },
    {
      image: highLight3,
      title: "Help Is Available",
      desc: `Before cops can help others, they must first take care of themselves. Help is available.`,
    },
    {
      image: highLight1,
      title: "CompStat & Crime Stats",
      desc: `Access crime statistics, traffic data, reports, and CompStat 2.0, an advanced digital crime-tracking system that delivers block-by-block data.`,
    },
    {
      image: highLight2,
      title: "Body-worn Cameras",
      desc: `Body-worn cameras have come to the NYPD. What you need to know.`,
    },
    {
      image: highLight3,
      title: "Help Is Available",
      desc: `Before cops can help others, they must first take care of themselves. Help is available.`,
    },
  ];

  const slides = items.map((item, idx) => (
    <div key={idx} className="mx-auto w-full max-w-xs cursor-pointer p-4">
      <img
        src={item.image}
        alt={item.title}
        className="mx-auto mb-4 w-3xl"
        loading="lazy"
      />
      <h2 className="text-reporter text-center font-bold">{item.title}</h2>
      <p className="text-center">{item.desc}</p>
    </div>
  ));

  return (
    <div>
      <h2 className="tablet:text-3xl desktop:text-4xl my-6 text-center text-2xl font-bold">
        Programs and resources
      </h2>
      <Sliders
        slides={slides}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={false}
        className="tablet:rounded-lg px-4"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      />
    </div>
  );
};

export default HightLight;
