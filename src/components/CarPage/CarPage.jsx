import React from 'react';
import './CarPage.css'
import { FaExchangeAlt } from 'react-icons/fa'

const CarPage = () => {
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
            Ovdje ce biti galerija
          </div>
          <div className='mka__description-carpage'>
            <h6>BESCHREIBUNG</h6>
            <div className='mka__section-divider short-carpage'></div>
            <ul>
              <li><p>Erstzulassung</p><strong>01/2006</strong></li>
              <li><p>Marke</p><strong>BMW</strong></li>
              <li><p>Modell</p><strong>3er-Reihe</strong></li>
              <li><p>Fahrzeugtype</p><strong>Limousine</strong></li>
              <li><p>Zustand</p><strong>Gebrauchtwagen</strong></li>
              <li><p>Kilometer</p><strong>154.000</strong></li>
              <li><p>Getriebeart</p><strong>Automatik</strong></li>
              <li><p>Antrieb</p><strong>Hinterrad</strong></li>
              <li><p>Hubraum</p><strong>2.497 cm³</strong></li>
              <li><p>Treibstoff</p><strong>Benzin</strong></li>
              <li><p>Leistung</p><strong>160kw /218 PS</strong></li>
              <li><p>Farbe</p><strong>Silber</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CarPage

