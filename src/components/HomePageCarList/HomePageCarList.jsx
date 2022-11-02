import React, { useEffect, useState } from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import './HomePageCarList.css';
import {
  ContactPageLink,
  CarPurchaseLink,
  FinancePageLink,
  CarsLink,
} from './index';

const HomePageCarList = () => {
  const [cars, setCars] = useState([]);

  const url = 'http://finity.pro/clients/mkautomobile/cars/all';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(cars => {
        const currentCars = cars.slice(-5);
        setCars(currentCars);
      });
  }, []);

  return (
    <div className='mka__wrapper home-list'>
      <div className='mka__container'>
        <div className='mka__content'>
          <h2>FAHRZEUGANGEBOTE</h2>
          <div className='mka__section-divider-second-divider'></div>
          <div>
            <HomeSlider cars={cars} />
          </div>
          <div className='mka__section-divider'></div>
          <div className='mka__shortcuts-home-list'>
            {/* Linkove sve prepisati u jednu komponentu i mapovati */}
            <CarsLink />
            <FinancePageLink />
            <CarPurchaseLink />
            <ContactPageLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarList;
