import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';

var url = 'http://finity.pro/clients/mkautomobile/search';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      cars: []
    };
  }

 componentDidMount() {
  fetch(url)
  .then(res => {
    this.setState(prevState => ({...prevState, cars: res.make}))
})
.then(console.log(this.state.cars))
.catch(err => console.log(err))
}
  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    const filterCars = (inputValue) => {
      return this.state.cars.filter((car) =>
        car.make.toLowerCase().includes(inputValue.toLowerCase())
      );
    };
    const loadOptions = (
      inputValue,
      callback) => {
      setTimeout(() => {
        callback(filterCars(inputValue));
      }, 1000);
    };
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}