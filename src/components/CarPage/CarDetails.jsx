import React from 'react';

const CarDetails = ({ car }) => {
  console.log(car);

  return (
    <div className='mka__description-carpage'>
      <h6>BESCHREIBUNG</h6>
      <div className='mka__section-divider short-carpage'></div>
      <ul className='mka__list-carpage'>
        <li className='mka__car-attributes'>
          <span>Erstzulassung</span>
          <strong>
            {car.month}/{car.year}
          </strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Marke</span>
          <strong>{car.make}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Modell</span>
          <strong>{car.model}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Fahrzeugtype</span>
          <strong>{car.body}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Zustand</span>
          <strong>{car.condition}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Kilometer</span>
          <strong>{car.mileage}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Getriebeart</span>
          <strong>{car.transmission}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Antrieb</span>
          <strong>{car.drivetrain}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Hubraum</span>
          <strong>{car.engine} cm³</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Treibstoff</span>
          <strong>{car.fuel}</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Leistung</span>
          <strong>160kw /218 PS</strong>
        </li>
        <li className='mka__car-attributes'>
          <span>Farbe</span>
          <strong>{car.exterior}</strong>
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
