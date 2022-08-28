import React from 'react';
import CarsItem from './CarsItem';
import './Cars.css';



const Cars = ({filteredCarsList, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='mka__cars-grid'>
        {filteredCarsList.map(car =>
            <CarsItem key={car.id} car={car}/>)}
        </div>
    )
  }



export default Cars