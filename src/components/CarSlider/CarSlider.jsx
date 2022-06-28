import React, { Component } from 'react';
import './CarSlider.css';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';


 class CarSlider extends Component{
  
  render () {
  return (
    <div className='mka__sorter-wrapper'>
      <div className='mka__sorter-range-width'>
    <Range />
    </div>
    </div>
  )
}
 }

export default CarSlider