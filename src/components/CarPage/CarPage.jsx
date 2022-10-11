import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarPage.css';
import CarEquipment from './CarEquipment';
import CarDescription from './CarDescription';
import { FaExchangeAlt, FaSlidersH } from 'react-icons/fa';
import MainProductPageSlider from '../MainProductPageSlider/MainProductPageSlider';
import HomeSlider from '../HomeSlider/HomeSlider';

const url = 'http://finity.pro/clients/mkautomobile/cars/all';

const CarPage = ({ carsList }) => {
  const id = useParams();
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [cars, setCars] = useState([]);

  const carId = JSON.stringify(id);
  console.log(carId);

  // useEffect(() => {
  //   fetch('http://finity.pro/clients/mkautomobile/cars/'
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setData(data);
  //     });
  // }, [id]);

  // const getCar = () => {
  //   const filteredCar = carsList.filter(car => car.id === id);
  //   console.log(filteredCar);
  // };

  const handleClick = () => {
    setIsActive(false);
  };
  const url = 'http://finity.pro/clients/mkautomobile/cars/all';

  return (
    <div className='mka__wrapper-carpage'>
      <div className='mka__container'>
        <div className='mka__content-carpage'>
          <div className='mka__title-price-carpage'>
            <h3>
              BMW 3ER-REIHE 325 I XDRIVE (E90) ** ALLRAD - AUTOMATIK** <br />
              LIMOUSINE
            </h3>
            <h4>8.490€</h4>
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
                  <strong>01/2006</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Marke</span>
                  <strong>BMW</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Modell</span>
                  <strong>3er-Reihe</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Fahrzeugtype</span>
                  <strong>Limousine</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Zustand</span>
                  <strong>Gebrauchtwagen</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Kilometer</span>
                  <strong>154.000</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Getriebeart</span>
                  <strong>Automatik</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Antrieb</span>
                  <strong>Hinterrad</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Hubraum</span>
                  <strong>2.497 cm³</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Treibstoff</span>
                  <strong>Benzin</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Leistung</span>
                  <strong>160kw /218 PS</strong>
                </li>
                <li className='mka__car-attributes'>
                  <span>Farbe</span>
                  <strong>Silber</strong>
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
          <HomeSlider cars={cars} />
        </div>
      </div>
    </div>
  );
};

export default CarPage;
