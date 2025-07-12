import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Sliders = ({
  slides = [],
  slidesPerView = 1,
  loop = true,
  pagination = { clickable: true },
  navigation = false,
  spaceBetween = 30,
  className = "",
  breakpoints = null,
}) => {
  return (
    <div className="mobile:px-6 desktop:px-8 mx-auto w-full max-w-7xl px-4">
      <Swiper
        className={className}
        modules={[Pagination, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        pagination={pagination}
        navigation={navigation}
        breakpoints={breakpoints}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>{slideContent}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
