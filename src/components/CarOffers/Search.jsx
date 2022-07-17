import React from 'react';
import { Component } from 'react';
import AsyncSelect from 'react-select/async'
import './Search.css'



class Search extends Component {
  state = {
    inputValue: '',
    selectedOption: '',
    cleareble: false,
    cars: []
  }    

  componentDidMount() {
        fetch('http://finity.pro/clients/mkautomobile/search')
        .then(res => {
            this.setState({
                cars: [res.cars.make, res.cars.link]
            })
            console.log("hello", this.state.cars)
        })
   }

   handleChange(selectedOption) {
    this.setState({selectedOption});
   }
  render() {
    let options = this.state.cars.map(function (car) {
      return { value: car.make, label: car.make, image: car.link };
    })
  return (
    <div>
<AsyncSelect
  className='select-search'
  value={this.state.inputValue}
  onChange={this.handleChange}
  cleareble={this.state.cleareble}
  options={options}
  formatOptionLabel={car => (
    <div className="car-option">
      <img src={car.image} alt="car-image" />
      <span>{car.label}</span>
    </div>
      )}/>
    </div>
  );
}

}

export default Search;