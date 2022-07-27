import React from 'react';
import Select from 'react-select';


const Search = ({ value, carsList, changeInput}) => {

  const carsOptions = carsList.map((car) => {
    return {
      value: car.make,
      label: car.make
    }
  })
    return (
      <>
  <Select
  cacheOptions
  value={value}
  options={carsOptions}
  defaultOptions
  onInputChange={changeInput}
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