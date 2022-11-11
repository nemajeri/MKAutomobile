import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import './HomePageCarList.css';
import { CarsProvider } from '../utils/CarsContext';
import HomePageLinks from './HomePageLinks';

const HomePageCarList = () => {
  const titles = [
    'fahrzeugangebote',
    'finanzierung',
    'fahrzeugankauf',
    'kontakt',
  ];
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
            {titles.map((title, index) => (
              <HomePageLinks title={title} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarList;
