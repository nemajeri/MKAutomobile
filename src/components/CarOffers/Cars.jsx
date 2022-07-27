import React from 'react';
import CarsItem from './CarsItem';
import './Cars.css';



const Cars = ({ carsList }) => {
    return (
        <div className='mka__cars-grid'>
        {carsList.map(car =>
            <CarsItem key={car.id} car={car}/>)}
        </div>
    )
  }



export default Cars