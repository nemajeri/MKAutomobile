import React from 'react';

const CarDetail = ({ descritpionRow }) => {
  return (
    <li className='mka__car-attributes'>
      <span>{descritpionRow.description}</span>
      <strong>{descritpionRow.value}</strong>
    </li>
  );
};

export default CarDetail;
