import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function MainProductPageSlider({ car: { images } }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.error(images)

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
        className='mka__productPageSwiper'
      >
        {images?.map((image) => (
          <SwiperSlide>
            <img src={require(`../../assets/${image}`)} alt='main' className='mka__individual-car__images'/>
          </SwiperSlide>
        ))}
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
        {images?.map((image) => (
          <SwiperSlide>
            <img src={require(`../../assets/${image}`)} alt='subs' className='mka__individual-car__carousel-images'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
