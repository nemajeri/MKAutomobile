import React, { Component } from 'react';
import './CarSlider.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


 class CarSlider extends Component{
  state = { sliderValues: [2900, 29000] };

  handleChange = sliderValues => {
    this.setState({ sliderValues });
    };

  render () {
    const {sliderValues} = this.state;

  return (
    <div className='mka__range-alignment'>
      <div className='mka__range-text'>
     <p>Preisklasse:</p>
     <p>{sliderValues[0]}€ - {sliderValues[1]}€</p>
     </div>
     <div className='mka__range-btn-align'>
    <div className='mka__range-width'>
    <Slider
    range
    onChange={this.handleChange}
    tipFormatter={(value) => `${value}`}
    tipProps={{ visible: true }}
    defaultValue={[2900, 29000]}
    min={2900}
    max={29000}
/>
    </div>
    <button className='mka__range-button'>Filter</button>
    </div>
    </div>
  )
}
 }

export default CarSlider