import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarPage.css';
import CarEquipment from './CarEquipment';
import CarDescription from './CarDescription';
import { FaExchangeAlt, FaSlidersH } from 'react-icons/fa';
import MainProductPageSlider from '../MainProductPageSlider/MainProductPageSlider';
// import HomeSlider from '../HomeSlider/HomeSlider';

const CarPage = ({ carsList }) => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);

  const singleCar = carsList.find(car => car.id === id) || {};
  console.log(singleCar);

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <div className='mka__wrapper-carpage'>
      <div className='mka__container'>
        <div className='mka__content-carpage'>
          <div className='mka__title-price-carpage'>
            <h3>
              BMW 3ER-REIHE 325 I XDRIVE (E90) ** ALLRAD - AUTOMATIK** <br />
              LIMOUSINE
            </h3>
            <h4>{singleCar.price}€</h4>
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
          <div className='mka__description-section__carpage'>
            <div className='mka__gallery-carpage'>
              <MainProductPageSlider />
            </div>
            <div className='mka__description-carpage'>
              <h6>BESCHREIBUNG</h6>
              <div className='mka__section-divider short-carpage'></div>
              <ul className='mka__list-carpage'>
                <li className='mka__car-attributes'>
                  <span>Erstzulassung</span>
                  <strong>
                    {singleCar.month}/{singleCar.year}
                  </strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Marke</span>
                  <strong>{singleCar.make}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Modell</span>
                  <strong>{singleCar.model}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Fahrzeugtype</span>
                  <strong>{singleCar.body}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Zustand</span>
                  <strong>{singleCar.condition}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Kilometer</span>
                  <strong>{singleCar.mileage}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Getriebeart</span>
                  <strong>{singleCar.transmission}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Antrieb</span>
                  <strong>{singleCar.drivetrain}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Hubraum</span>
                  <strong>{singleCar.engine} cm³</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Treibstoff</span>
                  <strong>{singleCar.fuel}</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Leistung</span>
                  <strong>160kw /218 PS</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Farbe</span>
                  <strong>{singleCar.exterior}</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className='mka__description-tabs__carpage'>
            <ul>
              <li
                className={`mka__description-tab__carpage ${
                  isActive ? 'selected' : ''
                }`}
                onClick={prevState => setIsActive(prevState)}
              >
                <i>
                  <FaSlidersH />
                </i>
                AUSSTATUNG
              </li>
              <li
                className={`mka__description-tab__carpage ${
                  !isActive ? 'selected' : ''
                }`}
                onClick={handleClick}
              >
                <i>
                  <FaSlidersH />
                </i>
                ZUSATZINFORMATION
              </li>
            </ul>
            {isActive ? <CarEquipment /> : <CarDescription />}
          </div>
        </div>
        <h4>ÄHNLICHE FAHRZEUGE</h4>
        <div className='mka__home-slider-section__carpage'>
          {/* <HomeSlider cars={cars} /> */}
        </div>
      </div>
    </div>
  );
};

export default CarPage;
