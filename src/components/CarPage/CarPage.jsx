import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarPage.css';
import CarEquipment from './CarEquipment';
import CarDescription from './CarDescription';
import { FaSlidersH } from 'react-icons/fa';
import MainProductPageSlider from '../MainProductPageSlider/MainProductPageSlider';
import CarDetails from './CarDetails';
import CarPageHeaderSection from './CarPageHeaderSection';
import HomeSlider from '../HomeSlider/HomeSlider';

const CarPage = ({ carsList }) => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [car, setCar] = useState();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const url = `http://finity.pro/clients/mkautomobile/cars/${id}`;
  const currentCars = carsList.slice(-5);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch(url);
      const singleCar = await response.json();
      setCar(singleCar);
      setLoading(false);
    };
    getCars(currentCars);
    fetchCar();
  }, []);

  const getCars = arr => {
    setCars(arr);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <div className='mka__wrapper-carpage'>
      <div className='mka__container'>
        <div className='mka__content-carpage'>
          {loading === false && <CarPageHeaderSection car={car} />}
          <div className='mka__description-section__carpage'>
            <div className='mka__gallery-carpage'>
              <MainProductPageSlider />
            </div>
            {loading === false && <CarDetails car={car} />}
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
            {isActive ? (
              <CarEquipment car={car} />
            ) : (
              <CarDescription car={car} />
            )}
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
