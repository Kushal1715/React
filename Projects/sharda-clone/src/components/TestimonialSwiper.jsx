// TestimonialSwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../data";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialSwiper = () => {
  return (
    <div className="relative w-full max-w-5xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
              <div className="flex justify-center my-2">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 swiper-button-prev cursor-pointer">
        <FaChevronLeft className="text-gray-500 hover:text-gray-700 text-2xl" />
      </div>
      <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 swiper-button-next cursor-pointer">
        <FaChevronRight className="text-gray-500 hover:text-gray-700 text-2xl" />
      </div>
    </div>
  );
};

export default TestimonialSwiper;
