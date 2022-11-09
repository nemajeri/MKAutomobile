import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import './HomePageCarList.css';
import {
  ContactPageLink,
  CarPurchaseLink,
  FinancePageLink,
  CarsLink,
} from './index';
import { CarsProvider } from '../utils/CarsContext';

const HomePageCarList = () => {
  return (
    <div className='mka__wrapper home-list'>
      <div className='mka__container'>
        <div className='mka__content'>
          <h2>FAHRZEUGANGEBOTE</h2>
          <div className='mka__section-divider-second-divider'></div>
          <CarsProvider>
            <HomeSlider />
          </CarsProvider>
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
