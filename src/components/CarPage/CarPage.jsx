import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaSlidersH } from 'react-icons/fa';
import {
  // CarEquipment,
  // CarDescription,
  MainProductPageSlider,
  CarDetails,
  CarPageHeaderSection,
} from './index';
// import HomePageCarousel from '../HomePageLinkAndCarousel/HomePageCarousel';
import './CarPage.css';
import { cars } from '../utils/cars';




const CarPage = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  // const [car, setCar] = useState();
  const [loading, setLoading] = useState(false);
  // const [cars, setCars] = useState([]);
  // const [halfOfFeatures, setHalfOfFeatures] = useState();

  const car = cars.find(car => car.id == id)

  // const url = `${process.env.REACT_APP_MY_API_KEY_WITH_ID + id}`;

  // useEffect(() => {
    // const fetchCar = async () => {
    //   const response = await fetch(url);
    //   const singleCar = await response.json();
    //   const secondColumnStart = Math.floor(singleCar.features.length / 2);
    //   setHalfOfFeatures(secondColumnStart);
    //   setCar(singleCar);
    //   setLoading(false);
    // };
    // fetchCar();
    // eslint-disable-next-line
  // }, []);

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <div className='mka__wrapper carpage'>
      <div className='mka__container'>
        <div className='mka__content-carpage'>
          {!loading && <CarPageHeaderSection car={car}/>}
          <div className='mka__description-section__carpage'>
            <div className='mka__gallery-carpage'>
              <MainProductPageSlider car={car} />
            </div>
            {!loading && <CarDetails car={car} />}
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
            {/* {isActive ? (
              <CarEquipment car={car} halfOfFeatures={halfOfFeatures} />
            ) : (
              <CarDescription car={car} />
            )} */}
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
