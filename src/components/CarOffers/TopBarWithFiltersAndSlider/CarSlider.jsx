import React, { useState } from 'react';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import Button from '../../utils/Button';

const CarSlider = (
  {
    // handleSliderChange,
    // sliderValues
  }
) => {
  const [defaultValues, setDefaultValues] = useState([800, 1000]);

  const onChange = defaultValues => {
    setDefaultValues(defaultValues);
  };

  return (
    <div className='mka__range-alignment'>
      <div className='mka__range-text'>
        <p>Preisklasse</p>
        <p className='mka__range-price'>
          {defaultValues[0]}€ - {defaultValues[1]}€
        </p>
      </div>
      <div className='mka__range-btn-align'>
        <div className='mka__range-width'>
          <Range
            value={[defaultValues[0], defaultValues[1]]}
            allowCross={false}
            range
            tipFormatter={value => `${value}`}
            tipProps={{ visible: true }}
            min={defaultValues[0]}
            max={1000}
            onChange={onChange}
          />
        </div>
        <Button className={'mka__range-button'}>Filter</Button>
      </div>
    </div>
  );
};

export default CarSlider;
