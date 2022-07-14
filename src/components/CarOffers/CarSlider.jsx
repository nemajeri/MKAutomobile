import React, { Component } from 'react';
import './CarSlider.css';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';


 class CarSlider extends Component{
  
  render () {
  return (
    <div className='mka__range-alignment'>
      <div className='mka__range-text'>
     <p>Preisklasse:</p>
     <p>2.900€ - 29.000€</p>
     </div>
     <div className='mka__range-btn-align'>
    <div className='mka__range-width'>
    <Range />
    </div>
    <button className='mka__range-button'>Filter</button>
    </div>
    </div>
  )
}
 }

export default CarSlider