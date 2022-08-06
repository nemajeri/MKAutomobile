import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './ImageSlider.css'

import { Pagination } from "swiper";

 const ImageSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require("../../assets/1.jpg")} alt="gallery-image_1" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/2.jpg")} alt="gallery-image_2" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/3.jpg")} alt="gallery-image_3" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/4.jpg")} alt="gallery-image_4" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/5.jpg")} alt="gallery-image_5" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/6.jpg")} alt="gallery-image_6" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/7.jpg")} alt="gallery-image_7" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/8.jpg")} alt="gallery-image_8" /></SwiperSlide>
        <SwiperSlide><img src={require("../../assets/9.jpg")} alt="gallery-image_9" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageSlider