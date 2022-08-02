import React from 'react';
import Select from 'react-select';

const SortingCars = () => {
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
<Select options={options}  styles={colourStyles} placeholder='Sortieren von Daten' isSearchable={false}/>
    </div>
    )
  }

export default SortingCars