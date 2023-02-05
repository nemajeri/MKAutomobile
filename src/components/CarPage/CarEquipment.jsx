import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './CarPage.css';

const CarEquipment = ({ car, halfOfFeatures }) => {
  return car ? (
    <>
      <ul className='mka__list-alignment__carpage'>
        <div className='mka__list-alignment__carpage inner-div'>
          <div>
            {car.features.slice(0, halfOfFeatures).map(ferature => (
              <li key={car.id}>
                <FaCheck style={{ color: 'red' }} /> {ferature}
              </li>
            ))}
          </div>
          <div>
            {car.features.slice(halfOfFeatures).map(ferature => (
              <li key={car.id}>
                <FaCheck style={{ color: 'red' }} /> {ferature}
              </li>
            ))}
          </div>
        </div>
      </ul>
    </>
  ) : null;
};

export default CarEquipment;
