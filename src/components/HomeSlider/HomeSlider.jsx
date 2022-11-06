import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

import CarsContext from '../utils/CarsContext';

const HomeSlider = () => {
  const [slicedCars, setSlicedCars] = useState([]);
  const { array, loader } = useContext(CarsContext);
  const [isLoading, setIsLoading] = loader;

  useEffect(() => {
    implemetCars();
  }, []);

  const implemetCars = async () => {
    const highlightedCars = array.slice(-5);
    setIsLoading(false);
    setSlicedCars(highlightedCars);
  };

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
        {slicedCars.map(car => (
          <SwiperSlide key={car.id}>
            <Card car={car} key={car.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    alert('Loading...')
  );
};

export default HomeSlider;
