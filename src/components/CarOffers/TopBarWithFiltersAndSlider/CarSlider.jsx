import React from 'react';
import './CarSlider.css';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

const CarSlider = ({ handleSliderChange, sliderValues }) => {
  return (
    <div className='mka__range-alignment'>
      <div className='mka__range-text'>
        <p>Preisklasse</p>
        <p className='mka__range-price'>
          {sliderValues[0]}€ - {sliderValues[1]}€
        </p>
      </div>
      <div className='mka__range-btn-align'>
        <div className='mka__range-width'>
          <Range
            defaultValue={[2900, 24900]}
            allowCross={false}
            range
            tipFormatter={value => `${value}`}
            tipProps={{ visible: true }}
            min={2900}
            max={24900}
            onChange={handleSliderChange}
          />
        </div>
        <button className='mka__range-button' onClick={handleSliderChange}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default CarSlider;
