import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './CarPage.css';

const CarEquipment = ({ car }) => {
  let halfOfFeatures = Math.floor(car.features?.length / 2);
  return (
    <>
      <ul className='mka__list-alignment__carpage'>
        <div className='mka__list-alignment__carpage inner-div'>
          <div>
            {car.features?.slice(0, halfOfFeatures).map((feature, index) => (
              <li key={index}>
                <FaCheck style={{ color: 'red' }} /> {feature}
              </li>
            ))}
          </div>
          <div>
            {car.features?.slice(halfOfFeatures).map((feature) => (
              <li key={halfOfFeatures++}>
                <FaCheck style={{ color: 'red' }} /> {feature}
              </li>
            ))}
          </div>
        </div>
      </ul>
    </>
  );
};

export default CarEquipment;
