import React from 'react';
import Select from 'react-select';
import './Search.css'


const Search = ({ carsList }) => {
  const carsOptions = carsList.map((car) => {
    return {
      value: car.title,
      label: car.title
    }
  })

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'grey',
      padding: 20,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: state.isFocused ? '1px solid red' : '1px solid white',
      padding: '5px',
    }),
    control: () => ({
      width: 200,
    })
  }
    return (
      <>
  <Select
  cacheOptions
  placeholder='Suche...'
  options={carsOptions}
  styles={customStyles}
  defaultOptions
  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
  formatOptionLabel={car => (
    <div className="country-option">
      <img src={car.link} alt="car-label"/>
      <span>{car.label}</span>
    </div>
  )}
    />
      </>
    );
  }


export default Search  
