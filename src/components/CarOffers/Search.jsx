import React from 'react';
import AsyncSelect from 'react-select/async';


const Search = ({ carsList, changeInput}) => {

    const filterCars = (value) => {
    return carsList.filter((car) =>
      car.make.toLowerCase().includes(value.toLowerCase())
    );
  };

    const loadOptions = (value, callback) => {
    setTimeout(() => {
      callback(filterCars(value));
    }, 1000);
  };

    return (
      <>
  <AsyncSelect
  cacheOptions
  loadOptions={loadOptions}
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