import { highLight1, highLight2, highLight3 } from "../../assets/index";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HightLight = () => {
  return (
    <div>
      <h2 className="tablet:text-3xl desktop:text-4xl my-6 text-center text-2xl font-bold">
        Programs and resources
      </h2>
      <Swiper
        className="tablet:rounded-lg"
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
      >
        <SwiperSlide>
          <div>
            <img
              src={highLight1}
              alt="Slide 1"
              className="tablet:mx-auto tablet:my-4 w-3xl"
            />
            <h2 className="text-reporter text-center font-bold">
              CompStat & Crime Stats
            </h2>
            <p className="text-center">
              Access crime statistics, traffic data, reports, and CompStat 2.0,
              an advanced digital crime-tracking system that delivers
              block-by-block data.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={highLight2}
              alt="Slide 2"
              className="tablet:mx-auto tablet:my-4 w-3xl"
            />
            <h2 className="text-reporter text-center font-bold">
              Body-worn Cameras
            </h2>
            <p className="text-center">
              Body-worn cameras have come to the NYPD. What you need to know.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={highLight3}
              alt="Slide 3"
              className="tablet:mx-auto tablet:my-4 w-3xl"
            />
            <h2 className="text-reporter text-center font-bold">
              Help Is Available
            </h2>
            <p className="text-center">
              Before cops can help others, they must first take care of
              themselves. Help is available.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HightLight;
