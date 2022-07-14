import React, { Fragment } from 'react';
import { FaCalendarAlt, FaCog } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import './CarsItem.css'

const CarsItem = ({car: {year,month,transmission,mileage,price}}) => {
   
    return (
      <Fragment>
      <div className="cars-item_wrapper">
        <div className="cars-item_image">
          <img src={require("../../assets/bmw.jpg")} alt="bmw" />
        </div>
        <div className="cars-item_list">
          <ul className="cars-item_inline-list">
            <div className="cars-item_info-upper">
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
            <div className="cars-item_info-lower">
              <li>
                <i>
                  <GiGasPump />
                </i>
                {mileage}
              </li>
            </div>
          </ul>
        </div>
        <div className="cars-item_car-content">
          <a
            className="cars-item_car-title"
            href="https://mkautomobile.at/fahrzeugdaten/577930368/"
          >
            BMW Z4 sDrive 28i Roadster (E89) AUTOMATIK *M-PAKET* Cabrio /
            Roadster
          </a>
        </div>
        <div className=" cars-item_separator"></div>
        <div className="cars-item_car-price">
          <p className="cars-item_car-text">{price}</p>
        </div>
      </div>
    </Fragment>
    )
  }

export default CarsItem