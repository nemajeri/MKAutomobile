import React from 'react';
import { FaCalendarAlt, FaCog, FaLink, FaGasPump } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './FullCardWidth.css';
import Button from '../../utils/Button';

const FullCardWidth = ({
  car: { id, month, year, transmission, title, price, mileage, link },
}) => {
  const navigate = useNavigate();
  return (
    <div className='mka__cars-item_wrapper-view2'>
      <div className='mka__cars-item_details-view2'>
        <div className='mka__cars-item_image-container-view2'>
          {link && (
            <img
              src={require(`../../../assets/${link}`)}
              alt='full-card-width-car'
              className='mka__cars-item_image-view2'
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
        <div className='mka__cars-item-car-title__price-view2'>
          <Link to={`/fahrzeugdaten/${id}`}>
            <h5>{title}</h5>
          </Link>
          <div className='mka__cars-item_short-divider'></div>
          <h6 className='mka__cars-item_car-text-view2'>{price}€</h6>
          <div className='mka__car-item_details-preview--container_view2'>
            <div className='mka__car-item_details-preview--grouped_view2'>
              <div className='mka__cars-item_details-preview--view2'>
                <p>
                  <FaCalendarAlt />
                  {month}/{year}
                </p>
              </div>
              <div className='mka__cars-item_details-preview--view2'>
                <p>
                  <FaCog />
                  {transmission}
                </p>
              </div>
              <div className='mka__cars-item_details-preview--view2'>
                <p>
                  <FaGasPump />
                  {mileage}
                </p>
              </div>
            </div>
            <Button
              className='mka__cars-item_details-preview--view2-btn'
              onClick={() => navigate(`/fahrzeugdaten/${id}`)}
            >
              Einzelheiten
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCardWidth;
