import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './CarPage.css';

const CarEquipment = ({ car, halfOfFeatures }) => {
  return car ? (
    <>
      <ul className='mka__list-alignment__carpage'>
        <div className='mka__list-alignment__carpage inner-div'>
          <div>
            {/* Podjeliti na dvije komponente */}
            {car.features.slice(0, halfOfFeatures).map(string => (
              <li key={car.id}>
                <FaCheck style={{ color: 'red' }} /> {string}
              </li>
            ))}
          </div>
          <div>
            {car.features.slice(halfOfFeatures).map(string => (
              <li key={car.id}>
                <FaCheck style={{ color: 'red' }} /> {string}
              </li>
            ))}
          </div>
        </div>
      </ul>
    </>
  ) : null;
};

export default CarEquipment;
