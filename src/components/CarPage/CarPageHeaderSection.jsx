import React from 'react';
import './CarPage.css';
import { FaExchangeAlt } from 'react-icons/fa';

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
        <button className='btn mka__button-carpage'>
          <svg
            className='button'
            width='180px'
            height='60px'
            viewBox='0 0 180 60'
          >
            <polyline
              points='179,1 179,59 1,59 1,1 179,1'
              className='bg-line'
            />
            <polyline
              points='179,1 179,59 1,59 1,1 179,1'
              className='hl-line'
            />
          </svg>
          <span>Email</span>
        </button>
      </div>
    </>
  );
};

export default CarPageHeaderSection;
