import React, { Fragment } from 'react';
import { FaCalendarAlt, FaCog } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import './CarsItem.css'

const CarsItem = ({car: {year,month,transmission,mileage,price,title,link}}) => {
   
    return (
      <Fragment>
      <div className="cars-item_wrapper">
        <div className="cars-item_image">
          <img src={link} alt="car" />
        </div>
        <div>
          <a
            className="cars-item_car-title"
            href="https://mkautomobile.at/fahrzeugdaten/577930368/"
          >
           {title}
          </a>
        </div>
        <div className=" cars-item_separator"></div>
          <p className="cars-item_car-text">{price}</p>
      </div>
    </Fragment>
    )
  }

export default CarsItem