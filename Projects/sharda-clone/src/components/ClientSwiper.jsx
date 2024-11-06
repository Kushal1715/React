import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import { clients } from "../data";
const LogoSwiper = () => {
  // Split clients into rows (e.g., 2 rows)
  const row1Clients = clients.slice(0, Math.ceil(clients.length / 2));
  const row2Clients = clients.slice(Math.ceil(clients.length / 2));

  return (
    <div className="w-full py-4 bg-gray-200 space-y-4">
      {/* Row 1 */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="flex items-center justify-center"
      >
        {row1Clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-48"
          >
            <img
              src={client.logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2 */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="flex items-center justify-center"
      >
        {row2Clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-48"
          >
            <img
              src={client.logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSwiper;
