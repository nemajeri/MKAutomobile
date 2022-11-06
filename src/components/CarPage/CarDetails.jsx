import React from 'react';
import './CarPage.css';
import { CarDetail } from './CarDetail';

const CarDetails = car => {
  // const {
  //   make,
  //   model,
  //   body,
  //   condition,
  //   mileage,
  //   transmission,
  //   drivetrain,
  //   engine,
  //   fuel,
  //   exterior,
  // } = car;

  // const arrayOfSubtitlesAndValues = [
  //   {subtitle: 'Marke',value: make},
  //   {subtitle: 'Model',value: model},
  //   {subtitle:'Fahrzeugtype', value: body},
  //   {subtitle:'Zustand', value: condition},
  //   {subtitle:'Kilometerstand', value: mileage},
  //   {subtitle:'Getriebeart', value: transmission},
  //   {subtitle:'Antrieb', value: drivetrain},
  //   {subtitle:'Hubraum', value: engine},
  //   {subtitle:'Treibstoff', value: fuel},
  //   {subtitle:'Farbe', value: exterior},
  // ];

  // var links = [];
  // for (var i = 0; i < data.length; i++) {
  //     var item = arrayOfSubtitlesAndValues[i];
  //     links.push(<><CarDetail/></>);
  // }
  //}

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
          <span>Model</span>
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
