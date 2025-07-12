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
    <div key={idx} className="cursor-pointer p-4">
      <div className="flex h-[420px] w-full flex-col rounded-2xl bg-white p-6 shadow-md">
        <div className="mb-6 flex h-[260px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-grow flex-col justify-center text-center">
          <h2 className="mb-3 text-xl leading-tight font-bold text-gray-800">
            {item.title}
          </h2>
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="tablet:text-3xl desktop:text-4xl my-8 mb-12 text-center text-2xl font-bold text-gray-800">
          Programs and resources
        </h2>
        <Sliders
          slides={slides}
          slidesPerView={3}
          loop={true}
          navigation={true}
          pagination={false}
          className="tablet:rounded-lg"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        />
      </div>
    </div>
  );
};

export default HightLight;
