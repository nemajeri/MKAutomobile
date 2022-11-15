import React from 'react';
import DefaultCardWidth from './Layouts/DefaultCardWidth';
import FullCardWidth from './Layouts/FullCardWidth';

const ListedCars = ({ currentCars, isActive }) => {
  return (
    <>
      {isActive === 'mka__full-width-layout-right__sidebar' ||
      isActive === 'mka__full-width-layout-left__sidebar' ? (
        currentCars.map(car => <FullCardWidth car={car} />)
      ) : (
        <div className='mka__list-of-cars'>
          {currentCars.map(car => (
            <DefaultCardWidth car={car} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListedCars;
