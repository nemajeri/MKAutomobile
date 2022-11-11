import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

import { useAPI } from '../utils/CarsContext';

const HomeSlider = () => {
  const { array, loader } = useAPI();
  const [isLoading] = loader;

  return !isLoading ? (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
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
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className='mka__home-slider'
      >
        {array.slice(-5).map(car => (
          <SwiperSlide key={car.id}>
            <Card car={car} key={car.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : null;
};

export default HomeSlider;
