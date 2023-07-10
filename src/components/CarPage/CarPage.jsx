import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSlidersH } from 'react-icons/fa';
import {
  MainProductPageSlider,
  CarDetails,
  CarPageHeaderSection,
} from './index';
import './CarPage.css';
import { cars } from '../utils/cars';
import LoadingSvg from '../utils/LoadingSvg';
import CarEquipment from '../CarPage/CarEquipment';
import CarDescription from '../CarPage/CarDescription';

const CarPage = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const wantedCar = cars.find((car) => id == car.id);
    if (wantedCar) {
      setCar(wantedCar);
      setLoading(false);
    } else {
      navigate('/fahrzeugangebote');
      setLoading(true);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className='mka__loading-container'>
        <LoadingSvg />
      </div>
    );
  }
  return (
    car && (
      <div className='mka__wrapper carpage'>
        <div className='mka__container'>
          <div className='mka__content-carpage'>
            <CarPageHeaderSection car={car} />
            <div className='mka__description-section__carpage'>
              <div className='mka__gallery-carpage'>
                <MainProductPageSlider car={car} />
              </div>{' '}
              && <CarDetails car={car} />
            </div>
            <div className='mka__description-tabs__carpage'>
              <ul>
                <li
                  className={`mka__description-tab__carpage ${
                    isActive ? 'selected' : ''
                  }`}
                  onClick={(prevState) => setIsActive(prevState)}
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
                  onClick={() => setIsActive(false)}
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
        </div>
      </div>
    )
  );
};

export default CarPage;
