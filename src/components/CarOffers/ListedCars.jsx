import React from 'react';
import CarOffersCard from './CarOffersCard';

const ListedCars = ({ currentCars, isActive, initialState }) => {
  return (
    <>
      {currentCars.map(car => (
        <CarOffersCard
          key={car.id}
          car={car}
          isActive={isActive}
          initialState={initialState}
        />
      ))}
    </>
  );
};

export default ListedCars;
