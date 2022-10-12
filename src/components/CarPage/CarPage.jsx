import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarPage.css';
import CarEquipment from './CarEquipment';
import CarDescription from './CarDescription';
import { FaExchangeAlt, FaSlidersH } from 'react-icons/fa';
import MainProductPageSlider from '../MainProductPageSlider/MainProductPageSlider';
import CarDetails from './CarDetails';
// import HomeSlider from '../HomeSlider/HomeSlider';

const CarPage = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [car, setCar] = useState();
  const [loading, setLoading] = useState(true);

  const url = `http://finity.pro/clients/mkautomobile/cars/${id}`;

  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCar(data);
      setLoading(false);
    };

    fetchCar();
  }, []);

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <div className='mka__wrapper-carpage'>
      <div className='mka__container'>
        <div className='mka__content-carpage'>
          <div className='mka__title-price-carpage'>
            {/* <h3>{car.title}</h3>
            <h4>{car.price}€</h4> */}
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
            {loading == false && <CarDetails car={car} />}
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
