import React from 'react';
import './DisplayCars.css';
import Select from 'react-select';

const DisplayCars = ({handleDisplayedCarsChange}) => {
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
options={options}
components={{ IndicatorSeparator:() => null }}  
styles={colourStyles} 
className='select-placeholder'
defaultValue={options[0]}
isSearchable={false}
onChange={handleDisplayedCarsChange}
theme={(theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: 'grey',
    primary: 'grey',
  },
})}/>
    </div>
    )
  }

export default DisplayCars