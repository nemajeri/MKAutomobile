import React, { Component } from 'react';
import Select from 'react-select';

export class SortingCars extends Component {
  render() {
    const options = [
      { value: 'Sortieren nach Preis', label: 'Sortieren nach Preis' },
      { value: 'Sortieren nach Jahr', label: 'Sortieren nach Jahr' }
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
<Select options={options} onChange={(e) => { const sortBy = e.target.value; console.log(sortBy)}} styles={colourStyles} placeholder='Sortieren von Daten' isSearchable={false}/>
    </div>
    )
  }
}

export default SortingCars