import React from 'react';
import './CarPage.css';
import { FaExchangeAlt } from 'react-icons/fa';
import Button from '../utils/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setCarsToCompare } from '../utils/store';

const CarPageHeaderSection = ({ car, car: { 
  title, 
  price } }) => {
  const carsToCompare = useSelector((state) => state.carsToCompare);
  const dispatch = useDispatch();

  const handleCompareButtonClick = () => {
    dispatch(setCarsToCompare(new Set(carsToCompare).add(car)));
  };

  return (
    <>
      <div className='mka__title-price-carpage'>
        <h3>{title}</h3>
        <h4>{price}€</h4>
      </div>
      <div className='mka__email-filed-carpage'>
        <a
          className='mka__comparison-carpage'
          onClick={handleCompareButtonClick}
        >
          <i>
            <FaExchangeAlt color='white' />
          </i>
          <p>Hinzufügen zum vergleichen</p>
        </a>
        <Button className='mka__send-email'>Email</Button>
      </div>
    </>
  );
};

export default CarPageHeaderSection;
