import './Card.css'
import { FaCalendarAlt, FaCog,  } from 'react-icons/fa';
import { GiGasPump } from 'react-icons/gi'

function Card() {
  return (
  <div>
          <div className="card_wrapper">
            <div className="card_image">
              <img src={require('../../assets/bmw.jpg')} alt='bmw'/>
            </div>
               <div className="card_list">
               <ul className="card_inline-list">
                <div className='card_info-upper'>
                <li><i><FaCalendarAlt /></i>04/2073</li>
                <li><i><FaCog /></i>Automatik</li>
                </div>
                <div className='card_info-lower'>
                <li><i><GiGasPump /></i>56.000</li>
                </div>
               </ul>
               </div>
                    <div className="card_car-content">
                      <a className='card_car-title'href='https://mkautomobile.at/fahrzeugdaten/577930368/'>BMW Z4 sDrive 28i Roadster (E89) AUTOMATIK *M-PAKET* Cabrio / Roadster</a>
                    </div>
                      <div className=" card_separator"></div>
                        <div className="card_car-price">
                          <p className='card_car-text'>28.990€</p>
                          </div>      
       </div>
  </div>
      
  );
}

export default Card