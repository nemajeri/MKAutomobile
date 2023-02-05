import React, { useState } from 'react';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../CarOffers.css';
import Button from '../../utils/Button';

const CarSlider = ({ sliderValues, filterOnSubmittedSliderValuesChange }) => {
  const [defaultValues, setDefaultValues] = useState(sliderValues);

  const onChange = (values) => {
    setDefaultValues(values);
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
            value={defaultValues}
            allowCross={false}
            range
            tipFormatter={(value) => `${value}`}
            tipProps={{ visible: true }}
            min={sliderValues[0]}
            max={sliderValues[1]}
            onChange={onChange}
          />
        </div>
        <Button
        className={'mka__filter-btn'}
        onClick={() => filterOnSubmittedSliderValuesChange(defaultValues)}
      >
        Filter
      </Button>
      </div>
    </div>
  );
};

export default CarSlider;
