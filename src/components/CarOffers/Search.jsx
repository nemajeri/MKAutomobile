import React from 'react';
import Select from 'react-select';
import './Search.css'


const Search = ({ value, carsList, changeInput}) => {

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
  value={value}
  placeholder='Suche...'
  options={carsOptions}
  styles={customStyles}
  defaultOptions
  onInputChange={changeInput}
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

//constructor(carsList) {
/// super(carsList);
 // this.state = {
 //   inputValue: null,
  //  cars: carsList
 // };
//}

//handleInputChange = (newValue) => {
 // const inputValue = newValue.replace(/\W/g, '');
 // this.setState({ inputValue });
  //return inputValue;
//}
//

//render() {
 // const filterCars = (inputValue) => {
  //  return this.state.cars.filter((i) =>
   //   i.this.cars.make.toLowerCase().includes(inputValue.toLowerCase())
   // );
  //};

  //const loadOptions = (inputValue, callback) => {
   // setTimeout(() => {
     // callback(filterCars(inputValue));
   // }, 1000);
  //};

  //<AsyncSelect
  //cacheOptions
  //loadOptions={loadOptions}
  //defaultOptions
  //onInputChange={changeInput}