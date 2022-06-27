import React, { Component } from 'react';
import './CarSorting.css';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} %`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

 class CarSorting extends Component{
  
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

export default CarSorting