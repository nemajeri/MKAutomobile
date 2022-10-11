import './Gallery.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import React from 'react';

const Gallery = () => {
  return (
    <div className='mka__wrapper-gallery'>
      <div className='mka__container'>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Gallery;
