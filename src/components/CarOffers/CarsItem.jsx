import React, { Fragment } from 'react';
import { FaCalendarAlt, FaCog, FaLink } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './CarsItem.css'

const CarsItem = ({car: {id,year,month,transmission,price,title}}) => {
   
    return (
      <Fragment>
      <div className="cars-item_wrapper">
        <div className="cars-item_image-container">
          <img src={require("../../assets/bmw.jpg")} alt="car" className='cars-item_image'/>
          <div className="overlay">
          <ul>
            <li>
             <Link to={`/fahrzeugdaten/${id}`}>
              <i><FaLink/></i>
              </Link> 
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
          <Link
            className="cars-item_car-title"
            to={`/fahrzeugdaten/${id}`}
          >
           <h6>{title}</h6>
          </Link>
        </div>
        <div className="cars-item_separator"></div>
          <h6 className="cars-item_car-text">{price}€</h6>
      </div>
    </Fragment>
    )
  }

export default CarsItem