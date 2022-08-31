import React from 'react';
import Select from 'react-select';

const SortingCars = () => {
    const options = [
      { value: 'Sortieren nach Preis', label: 'Sortieren nach Preis' },
      { value: 'Sortieren nach Jahr', label: 'Sortieren nach Jahr' }
    ]

    const colourStyles = {
      control: (styles) => (
        { ...styles, 
        backgroundColor: "transparent",
        borderRadius: "0px"
      }
        ),
      option: (styles, state) => {
        return {
          ...styles,
          backgroundColor: state.isSelected ? "#393939" : "black",
          color: "#999999",
          fontSize: "14px"
        };
      },
      menu: (styles) => {
        return {
          ...styles,
          backgroundColor: "black"
        }
      },
      placeholder: (styles, state) => {
        return {
          ...styles,
          fontSize: state.isSelected ? "14px" : "14px"
        }
      },
      dropdownIndicator: (base, state) => ({
        ...base,
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
      })
    };

    return (
      <div className='mka__sorting-alignment'>
<Select
components={{ IndicatorSeparator:() => null }} 
options={options}  
className='select-placeholder'
styles={colourStyles} 
placeholder='Sortieren von Daten' 
isSearchable={false}
theme={(theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: 'grey',
    primary: 'grey',
  }
})}/>
    </div>
    )
  }

export default SortingCars