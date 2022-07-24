import React, { Component } from 'react';
import './DisplayCars.css';
import Select from 'react-select';

export class DisplayCars extends Component {
  render() {
    const options = [
      { value: '12', label: '12' },
      { value: '24', label: '24' },
      { value: '48', label: '48' },
      { value: '64', label: '64'}
    ]

    const colourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: "transparent" }),
      option: (styles, { isDisabled }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? "transparent" : "grey" ,
          color: "#FFF",
          cursor: isDisabled ? "not-allowed" : "default"
        };
      }
    };

    return (
      <div className='mka__sorting-alignment'>
<Select options={options} styles={colourStyles} isSearchable={false}/>
    </div>
    )
  }
}

export default DisplayCars