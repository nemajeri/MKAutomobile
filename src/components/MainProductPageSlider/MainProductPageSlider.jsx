import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function MainProductPageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {/* Probati svrstati u jednu komponentu i mapovati */}
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-1.jpg'
            alt='demo-1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='demo-2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='demo-3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-4.jpg'
            alt='demo-4'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-5.jpg'
            alt='demo-5'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-6.jpg'
            alt='demo-6'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-7.jpg'
            alt='demo-7'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-8.jpg'
            alt='demo-8'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-9.jpg'
            alt='demo-9'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-10.jpg'
            alt='demo-10'
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-1.jpg'
            alt='demo walking'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='demo running'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='demo ne znam'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-4.jpg'
            alt='demo stav'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-5.jpg'
            alt='demo stareci'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-6.jpg'
            alt='demo nemasta'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-7.jpg'
            alt='demo zekonja'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-8.jpg'
            alt='demo papir'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-9.jpg'
            alt='demo ljepilo'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-10.jpg'
            alt='demo austrija'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
