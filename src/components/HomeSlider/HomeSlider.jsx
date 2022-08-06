import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../Card/Card'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Navigation } from "swiper";

const HomeSlider = () => {
  const slides = []
  for(let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide><Card/></SwiperSlide>
    )

  }
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          981: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </>
  );
}

export default HomeSlider