import React from 'react'
import './Gallery.css'
import ImageSlider from '../ImageSlider/ImageSlider'

function Gallery() {
  return (
    <div className='mka__wrapper-gallery'>
    <div className='mka__container-gallery'>
      <div className='mka__content-gallery'>
         <ImageSlider />
    </div>
    </div>
    </div>
  );
}

export default Gallery;