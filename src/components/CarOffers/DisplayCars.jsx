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
      control: (styles) => (
        { ...styles, 
        backgroundColor: "transparent",
        borderRadius: "0px"
      }
        ),
      option: (styles) => {
        return {
          ...styles,
          backgroundColor: "black",
          color: "grey",
          fontSize: "14px"
        };
      },
      menu: (styles) => {
        return {
          ...styles,
          backgroundColor: "black"
        }
      },
      placeholder: (styles) => {
        return {
          ...styles,
          fontSize: "14px"
        }
      }
    };

    return (
      <div className='mka__sorting-alignment'>
<Select 
options={options}
components={{ IndicatorSeparator:() => null }}  
styles={colourStyles} 
className='select-placeholder'
placeholder='12'
isSearchable={false}/>
    </div>
    )
  }
}

export default DisplayCars