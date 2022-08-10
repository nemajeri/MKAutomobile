import "./Card.css"
import { FaCalendarAlt, FaCog, FaLink } from "react-icons/fa"
import { GiGasPump } from "react-icons/gi"

const Card = () => {
  return (
      <>
        <div className="card_wrapper">
        <div className="card_image-container">
          <img className="image" src={require("../../assets/bmw.jpg")} alt="bmw" />
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
                04/2073
              </li>
              <li>
                <i>
                  <FaCog />
                </i>
                Automatik
              </li>
            </div>
            <div className="card_info-lower">
              <li>
                <i>
                  <GiGasPump />
                </i>
                56.000
              </li>
            </div>
          </ul>
        </div>
        <div className="card_car-content">
          <a
            className="card_car-title"
            href="https://mkautomobile.at/fahrzeugdaten/577930368/"
          >
            <h6>BMW Z4 sDrive 28i Roadster (E89) AUTOMATIK *M-PAKET* Cabrio /
            Roadster</h6>
          </a>
        </div>
        <div className=" card_separator"></div>
        <div className="card_car-price">
          <h6>28.990€</h6>
        </div>
      </div>
      </>
  )
}

export default Card
