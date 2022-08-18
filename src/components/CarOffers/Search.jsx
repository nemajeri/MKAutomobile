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
      padding: 20,
      backgroundColor: 'white',
      "&:hover": {
        backgroundColor: 'white'
      },
      color: 'grey',
      "&:hover": {
        color: 'red'
      }
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: state.isFocused ? '1px solid red' : '1px solid white',
      padding: 8,
      paddingLeft: 20
    }),
    control: () => ({
      width: 'auto'
    })
  }

    return (
      <>
  <Select
  className='select-placeholder'
  cacheOptions
  placeholder='Suche...'
  options={carsOptions}
  styles={customStyles}
  defaultOptions
  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
  formatOptionLabel={car => (
    <div className="car-option">
      <img src={require("../../assets/bmw.jpg")} alt="car-label"/>
      <span>{car.label}</span>
    </div>
  )}
    />
      </>
    );
  }


export default Search  
