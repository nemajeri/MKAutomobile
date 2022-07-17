import React, { Component } from 'react';
import CarsItem from './CarsItem';
import './Cars.css';



export class Cars extends Component {
  render() {
    return (
        <div className='mka__cars-grid'>
          <h1>auto</h1>
        {/*{this.props.cars.map(car =>
            <CarsItem key={car.id} car={car}/>)}*/}
        </div>
    )
  }
}


export default Cars