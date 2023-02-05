import React from 'react';
import '../CarPage.css';
import CarDetail from './CarDetail';

const CarDetails = ({
  car: {
    make,
    model,
    body,
    condition,
    mileage,
    transmission,
    drivetrain,
    engine,
    fuel,
    exterior,
    month,
    year,
  },
}) => {
  const arrayOfDescriptionAndValues = [
    { description: 'Erstzulassung', value: month + '/' + year },
    { description: 'Marke', value: make },
    { description: 'Model', value: model },
    { description: 'Fahrzeugtype', value: body },
    { description: 'Zustand', value: condition },
    { description: 'Kilometerstand', value: mileage },
    { description: 'Getriebeart', value: transmission },
    { description: 'Antrieb', value: drivetrain },
    { description: 'Hubraum', value: engine },
    { description: 'Treibstoff', value: fuel },
    { description: 'Farbe', value: exterior },
  ];

  return (
    <div className='mka__description-carpage'>
      <h6>BESCHREIBUNG</h6>
      <div className='mka__section-divider short-carpage'></div>
      <ul className='mka__list-carpage'>
        {arrayOfDescriptionAndValues.map((descritpionRow, index) => (
          <CarDetail key={index.toString()} descritpionRow={descritpionRow} />
        ))}
      </ul>
    </div>
  );
};

export default CarDetails;
