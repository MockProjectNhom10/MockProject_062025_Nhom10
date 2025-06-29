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

// src/components/MySwiper.jsx
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const MySwiper = () => {
//   return (
//     <div className="w-full max-w-[1280px] mx-auto px-4">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//           },
//           480: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1280: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {[1, 2, 3, 4, 5].map((item) => (
//           <SwiperSlide key={item}>
//             <div className="bg-white shadow rounded-xl p-6 h-48 flex items-center justify-center">
//               <span className="text-xl font-semibold">Slide {item}</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MySwiper;
