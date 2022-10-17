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
      <div className='card_wrapper'>
        <div className='card_image-container'>
          <img
            className='image'
            src={require('../../assets/bmw.jpg')}
            alt='suggested-cars'
          />
          <div className='overlay'>
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
        <div className='card_list'>
          <ul className='card_inline-list'>
            <div className='card_info-upper'>
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
            <div className='card_info-lower'>
              <li>
                <i>
                  <GiGasPump />
                </i>
                {mileage}
              </li>
            </div>
          </ul>
        </div>
        <div className='card_car-content'>
          <Link to={`/fahrzeugdaten/${id}`} className='card_car-title'>
            <h6>
              Mazda Mazda6 Sport Combi CD150 Attraction Aut. Kombi / Family Van
            </h6>
          </Link>
        </div>
        <div className='card_separator'></div>
        <div className='card_car-price'>
          <h6>{price}€</h6>
        </div>
      </div>
    </>
  );
};

export default Card;
