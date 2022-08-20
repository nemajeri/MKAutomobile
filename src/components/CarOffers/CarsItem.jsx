import React, { Fragment } from 'react';
import { FaCalendarAlt, FaCog, FaLink } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import './CarsItem.css'

const CarsItem = ({car: {year,month,transmission,price,title}}) => {
   
    return (
      <Fragment>
      <div className="cars-item_wrapper">
        <div className="cars-item_image-container">
          <img src={require("../../assets/bmw.jpg")} alt="car" className='cars-item_image'/>
          <div className="overlay">
          <ul>
            <li>
             <a href="https://mkautomobile.at/fahrzeugdaten/579220740/">
              <i><FaLink/></i>
              </a> 
            </li>
          </ul>
          </div>
          <div className="overlay-bottom-slide">
            <div className="overlay-bottom-container">
              <div className="overlay-bottom-flex"><i><FaCalendarAlt/></i><p>{month}/{year}</p></div>
              <div className="overlay-bottom-flex"><i><FaCog/></i><p>{transmission}</p></div>
            </div>
        </div>
        </div>
        <div>
          <a
            className="cars-item_car-title"
            href="https://mkautomobile.at/fahrzeugdaten/577930368/"
          >
           <h6>{title}</h6>
          </a>
        </div>
        <div className="cars-item_separator"></div>
          <h6 className="cars-item_car-text">{price}€</h6>
      </div>
    </Fragment>
    )
  }

export default CarsItem