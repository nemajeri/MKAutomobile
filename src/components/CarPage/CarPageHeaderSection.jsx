import React from 'react';
import './CarPage.css';
import { FaExchangeAlt } from 'react-icons/fa';
import Button from '../utils/Button';

const CarPageHeaderSection = ({ car }) => {
  return (
    <>
      <div className='mka__title-price-carpage'>
        <h3>{car.title}</h3>
        <h4>{car.price}€</h4>
      </div>
      <div className='mka__email-filed-carpage'>
        <a className='mka__comparison-carpage'>
          <i>
            <FaExchangeAlt color='white' />
          </i>
          <p>Hinzufügen zum vergleichen</p>
        </a>
        <Button className='mka__send-email' >Email</Button>
      </div>
    </>
  );
};

export default CarPageHeaderSection;
