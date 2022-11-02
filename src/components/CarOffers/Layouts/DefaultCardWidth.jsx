import React from 'react'
import { FaCalendarAlt, FaCog, FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './DefaultCardWidth.css'

const View1 = ({car: {id, month, year, transmission, title, price}}) => {
  return (
    <div className="mka__cars-item_wrapper">
    <div className="mka__cars-item_image-container">
      <img src={require("../../../assets/bmw.jpg")} alt="car" className='mka__cars-item_image' />
      <div className="mka__card-overlay-content">
        <ul>
          <li>
            <Link to={`/fahrzeugdaten/${id}`}>
              <i><FaLink /></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mka__overlay-bottom-slide">
        <div className="mka__overlay-bottom-container">
          <div className="mka__overlay-bottom-flex"><i><FaCalendarAlt /></i><p>{month}/{year}</p></div>
          <div className="mka__overlay-bottom-flex"><i><FaCog /></i><p>{transmission}</p></div>
        </div>
      </div>
    </div>
    <div>
      <Link
        className="mka__cars-item_car-title"
        to={`/fahrzeugdaten/${id}`}
      >
        <h6>Mazda Mazda6 Sport Combi CD150 Attraction Aut. Kombi / Family Van</h6>
      </Link>
    </div>
    <div className="mka__cars-item_separator"></div>
    <h6 className="mka__cars-item_car-price">{price}€</h6>
  </div>
  )
}

export default View1