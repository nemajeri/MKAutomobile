import React from 'react'
import { FaCalendarAlt, FaCog, FaLink, FaGasPump } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './View2.css'

const View2 = ({car: {id, month, year, transmission, title, price, mileage}}) => {
  return (
    <div className="cars-item_wrapper-view2">
        <div className="cars-item_details-view2">
    <div className="cars-item_image-container-view2">
      <img src={require("../../assets/bmw.jpg")} alt="car" className='cars-item_image-view2' />
      <div className="overlay">
        <ul>
          <li>
            <Link to={`/fahrzeugdaten/${id}`}>
              <i><FaLink /></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="cars-item-car-title__price-view2">
      <Link
        to={`/fahrzeugdaten/${id}`}
      > 
        <h5>{title}</h5>
       </Link> 
    <div className="cars-item_short-divider"></div>  
    <h6 className="cars-item_car-text-view2">{price}€</h6>
    <div className='car-item_details-preview--container_view2'>
    <div className='car-item_details-preview--grouped_view2'>
    <div className='cars-item_details-preview--view2'><p><FaCalendarAlt />{month}/{year}</p></div>
    <div className='cars-item_details-preview--view2'><p><FaCog />{transmission}</p></div>
    <div className='cars-item_details-preview--view2'><p><FaGasPump />{mileage}</p></div>
    </div>
    <button className="btn btn-view2">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>EINZELHEITEN</span>
          </button>
          </div>
    </div>
    </div>
  </div>
  )
}

export default View2