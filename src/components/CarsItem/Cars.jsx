import React, { Component } from 'react';
import CarsItem from './CarsItem';


export class Cars extends Component {
  render() {
    return (
        <div className={carsStyle}>
        {this.props.cars.map(car =>
            <CarsItem key={car.id} car={car}/>)}
        </div>
    )
  }
}

const carsStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '1rem'
};

export default Cars