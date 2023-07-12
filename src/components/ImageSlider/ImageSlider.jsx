import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ImageSlider.css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import LoadingSvg from '../utils/LoadingSvg';

const ImageSlider = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='mka__home-slider'
      >
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/1.jpg')} alt='gallery-image_1' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/2.jpg')} alt='gallery-image_2' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/3.jpg')} alt='gallery-image_3' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/4.jpg')} alt='gallery-image_4' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/5.jpg')} alt='gallery-image_5' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/6.jpg')} alt='gallery-image_6' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/7.jpg')} alt='gallery-image_7' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/8.jpg')} alt='gallery-image_8' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mka__img-slider-size'>
            <img src={require('../../assets/9.jpg')} alt='gallery-image_9' />
          </div>
        </SwiperSlide>
      </Swiper>
      {isLoading && (
        <div className='mka__loading-svg-container'>
          <LoadingSvg />
        </div>
      )}
    </>
  );
};

export default ImageSlider;
