import React from 'react';
import { FaCalendarAlt, FaCog, FaLink } from 'react-icons/fa';
import { GiGasPump } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({
  car: { id, year, month, transmission, mileage, price, title, link },
}) => {
  return (
    <>
      <div className='mka__card-wrapper'>
        <div className='mka__card_image-container'>
          {link && (
            <img
              src={require(`../../assets/${link}`)}
              alt='suggested-cars'
              className='mka__card-image-content'
            />
          )}
          <div className='mka__card-overlay-content'>
            <ul>
              <li>
                <Link to={`/fahrzeugdaten/${id}`}>
                  <i>
                    <FaLink />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mka__card-car_specs'>
          <ul className='mka__card-inline-car_specs'>
            <div className='mka__card-car-info_upper'>
              <li>
                <i>
                  <FaCalendarAlt />
                </i>
                {month}/{year}
              </li>
              <li>
                <i>
                  <FaCog />
                </i>
                {transmission}
              </li>
            </div>
            <div className='mka__card-car-info_lower'>
              <li>
                <i>
                  <GiGasPump />
                </i>
                {mileage}
              </li>
            </div>
          </ul>
        </div>
        <div className='mka__card-car-content'>
          <Link to={`/fahrzeugdaten/${id}`} className='mka__card-car-title'>
            <h6>{title}</h6>
          </Link>
        </div>
        <div className='mka__card-separator'></div>
        <div className='mka__card-car-price'>
          <h6>{price}€</h6>
        </div>
      </div>
    </>
  );
};

export default Card;
