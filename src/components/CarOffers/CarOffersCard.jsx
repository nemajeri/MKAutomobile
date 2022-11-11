import React from 'react';
import DefaultCardWidth from './Layouts/DefaultCardWidth';
import FullCardWidth from './Layouts/FullCardWidth';

const CarOffersCard = ({ car, isActive, initialState }) => {
  return (
    <div
      className={
        isActive === initialState ||
        isActive === 'mka__default-layout-left__sidebar'
          ? 'mka__cars-grid'
          : 'mka__cars-flex'
      }
    >
      {isActive === 'mka__full-width-layout-right__sidebar' ||
      isActive === 'mka__full-width-layout-left__sidebar' ? (
        <FullCardWidth car={car} />
      ) : (
        <DefaultCardWidth car={car} />
      )}
    </div>
  );
};

export default CarOffersCard;
