import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { slider } from "../../assets/index";

const Sliders = () => {
  return (
    <Swiper
      className="tablet:rounded-lg"
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={slider} alt="Slide 1" className="h-full w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
