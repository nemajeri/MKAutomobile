import React, { useState } from 'react';
import './CarPage.css'
import CarEquipment from './CarEquipment';
import CarDescription from './CarDescription'
import { FaExchangeAlt, FaSlidersH } from 'react-icons/fa'
import MainProductPageSlider from '../MainProductPageSlider/MainProductPageSlider'
import HomeSlider from '../HomeSlider/HomeSlider'

const CarPage = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false)
  }

  return (
    <div className="mka__wrapper-error">
    <div className="mka__container">
      <div className='mka__content-error'>
        <div className='mka__title-price-carpage'>
          <h4>
            BMW 3ER-REIHE 325 I XDRIVE (E90) ** ALLRAD - AUTOMATIK** <br/>
            LIMOUSINE
          </h4>
          <h5>8.490€</h5>
        </div>
        <div className='mka__email-filed-carpage'>
            <a className='mka__comparison-carpage'>
              <i>
                <FaExchangeAlt color="white"/>
              </i>
              <p>
              Hinzufügen zum vergleichen
              </p>
              </a>
              <button className="btn mka__button-carpage">
            <svg class="button" width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Email</span>
          </button>
        </div>
        <div className='mka__description-section__carpage'>
          <div className='mka__gallery-carpage'>
          <MainProductPageSlider/>
          </div>
          <div className='mka__description-carpage'>
            <h6>BESCHREIBUNG</h6>
            <div className='mka__section-divider short-carpage'></div>
            <ul className='mka__list-carpage'>
              <li><div className='mka__list-content__carpage'><p>Erstzulassung</p><div className='mka__strong-alignment__carpage'><strong>01/2006</strong></div></div></li>
              <li><div className='mka__list-content__carpage'><p>Marke</p><strong>BMW</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Modell</p><strong>3er-Reihe</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Fahrzeugtype</p><strong>Limousine</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Zustand</p><strong>Gebrauchtwagen</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Kilometer</p><strong>154.000</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Getriebeart</p><div className='mka__strong-alignment__carpage'><strong>Automatik</strong></div></div></li>
              <li><div className='mka__list-content__carpage'><p>Antrieb</p><strong>Hinterrad</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Hubraum</p><strong>2.497 cm³</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Treibstoff</p><strong>Benzin</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Leistung</p><strong>160kw /218 PS</strong></div></li>
              <li><div className='mka__list-content__carpage'><p>Farbe</p><strong>Silber</strong></div></li>
            </ul>
          </div>
        </div>
              <div className='mka__description-tabs__carpage'>
              <ul>
                <li className='mka__description-tab--underline__carpage' onClick={(prevState) => setIsActive(prevState)}><i><FaSlidersH/></i>AUSSTATUNG</li>
                <li className='mka__description-tab--underline__carpage' onClick={handleClick}><i><FaSlidersH/></i>ZUSATZINFORMATION</li>
              </ul>
              {isActive ? <CarEquipment/> : <CarDescription/>}
              </div>
      </div>
              <HomeSlider/>
    </div>
  </div>
  )
}

export default CarPage

