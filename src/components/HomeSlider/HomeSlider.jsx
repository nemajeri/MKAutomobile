import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import { Navigation } from 'swiper';
import { cars } from '../utils/cars';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomeSlider = () => {
  return (
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
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <Card car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
