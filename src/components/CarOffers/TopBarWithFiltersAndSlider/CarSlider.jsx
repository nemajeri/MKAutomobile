import React, { useLayoutEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Button from '../../utils/Button';
import '../CarOffers.css';

const CarSlider = ({ sliderValues, isLoading, sliderValueChanged }) => {
  const [min, max] = sliderValues ?? [2900, 32990];
  const thumbsize = 14;

  const [avg, setAvg] = useState(((min ?? 2990) + (max ?? 32000)) / 2);
  const [minVal, setMinVal] = useState(min ?? 2900);
  const [maxVal, setMaxVal] = useState(max ?? 32990);

  const width = 300;
  const minWidth =
    thumbsize +
    ((avg - (min ?? 2990)) / ((max ?? 32000) - (min ?? 2990))) *
      (width - 2 * thumbsize);
  const minPercent =
    ((minVal - (min ?? 2990)) / ((avg ?? 17.495) - (min ?? 2990))) * 100;
  const maxPercent =
    ((maxVal - (avg ?? 17.495)) / ((max ?? 32000) - (avg ?? 17.495))) * 100;
  const styles = {
    min: {
      width: minWidth,
      left: 0,
      '--minRangePercent': `${minPercent}%`,
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      '--maxRangePercent': `${maxPercent}%`,
    },
  };

  useLayoutEffect(() => {
    setAvg((maxVal + minVal) / 2);
  }, [minVal, maxVal]);

  return isLoading ? null : (
    <div className='mka__slider-filtering'>
      <div>
        <div className='min-max-slider__label'>
          <label>Preisklasse: &nbsp;&nbsp;&nbsp;</label>
          <label className='min-max-slider__values'>
            {minVal}€ - {maxVal}€
          </label>
        </div>
        <div
          className='min-max-slider'
          data-legendnum='2'
          data-rangemin={min}
          data-rangemax={max}
          data-thumbsize={thumbsize}
          data-rangewidth={width}
        >
          <input
            id='min'
            className='min'
            style={styles.min}
            name='min'
            type='range'
            step='1'
            min={min}
            max={max}
            value={minVal}
            onChange={({ target }) => setMinVal(Number(target.value))}
          />
          <input
            id='max'
            className='max'
            style={styles.max}
            name='max'
            type='range'
            step='1'
            min={min}
            max={max}
            value={maxVal}
            onChange={({ target }) => setMaxVal(Number(target.value))}
          />
        </div>
      </div>
      <Button className={'mka__filter-btn'}>Filter</Button>
    </div>
  );
};

export default CarSlider;
