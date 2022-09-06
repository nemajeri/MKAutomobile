import React from 'react';
import './CarSlider.css';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';



const CarSlider = ({handleSliderChange, sliderValues}) => {

  return (
    <div className='mka__range-alignment'>
      <div className='mka__range-text'>
     <p>Preisklasse:</p>
     <p>{sliderValues[0]}€ - {sliderValues[1]}€</p>
     </div>
     <div className='mka__range-btn-align'>
    <div className='mka__range-width'>
    <Range
    allowCross={false}
    range
    tipFormatter={(value) => `${value}`}
    tipProps={{ visible: true }}
    defaultValue={[2900, 29000]}
    min={2900}
    max={29000}
    onChange={handleSliderChange}
/>
    </div>
    <button className='mka__range-button' onClick={handleSliderChange}>Filter</button>
    </div>
    </div>
  )
}

export default CarSlider