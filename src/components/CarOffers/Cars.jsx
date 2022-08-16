import React from 'react';
import CarsItem from './CarsItem';
import './Cars.css';



const Cars = ({ filteredList }) => {
    return (
        <div className='mka__cars-grid'>
        {filteredList.map(car =>
            <CarsItem key={car.id} car={car}/>)}
        </div>
    )
  }



export default Cars