import axios from 'axios';
import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      cars: []
    };
  }

     getCars = () => {
      axios.get('http://finity.pro/clients/mkautomobile/search')
      .then((response) => {
        response.data.forEach(() =>
        this.state.cars.push(
          {
            label: response.data.make,
            value: response.data.make
          }
        ))
      })
    } 

  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  }

  render() {
    const filterCars = (inputValue) => {
      return this.state.cars.filter((i) =>
        i.this.cars.make.toLowerCase().includes(inputValue.toLowerCase())
      );
    };

    const loadOptions = (inputValue, callback) => {
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
