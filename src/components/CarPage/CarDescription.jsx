import React from 'react';

const CarDescription = ({ car }) => {
  return car ? (
    <div
      className='mka__car-description__carpage'
      dangerouslySetInnerHTML={{ __html: car.description }}
    ></div>
  ) : null;
};

export default CarDescription;
