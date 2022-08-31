import "./Card.css"
import { FaCalendarAlt, FaCog, FaLink } from "react-icons/fa"
import { GiGasPump } from "react-icons/gi"

const Card = ({car: {year,month,transmission,mileage,price,title,link}}) => {
  return (
      <>
        <div className="card_wrapper">
        <div className="card_image-container">
          <img className="image" src={require("../../assets/bmw.jpg")} alt="suggested-cars" />
          <div class="overlay">
          <ul>
            <li>
             <a href="https://mkautomobile.at/fahrzeugdaten/579220740/">
              <i><FaLink/></i>
              </a> 
            </li>
          </ul>
          </div>
        </div>
        <div className="card_list">
          <ul className="card_inline-list">
            <div className="card_info-upper">
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
            <div className="card_info-lower">
              <li>
                <i>
                  <GiGasPump />
                </i>
                {mileage}
              </li>
            </div>
          </ul>
        </div>
        <div className="card_car-content">
          <a
            className="card_car-title"
            href="https://mkautomobile.at/fahrzeugdaten/577930368/"
          >
            <h6>{title}</h6>
          </a>
        </div>
        <div className="card_separator"></div>
        <div className="card_car-price">
          <h6>{price}€</h6>
        </div>
      </div>
      </>
  )
}

export default Card
