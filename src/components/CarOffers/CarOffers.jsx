import "./CarOffers.css"
import Cars from "./Cars"
import CarSlider from "./CarSlider";
import axios from 'axios';
import React, { Component } from "react";
import Search from "./Search";
import FilterSideBar from "./FilterSideBar"
import CarAlignment from "./CarAlignment";
import CarSorting from "./CarSorting";

class CarOffers extends Component {
  state = {
    cars: []
}

async componentDidMount() {
const res = await axios.get('http://finity.pro/clients/mkautomobile/cars/all');

this.setState({cars: res.data});

}
  render () {
  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          < CarSorting/>
          < CarAlignment/>
          </div>
          <div className="item2">
            <div className="mka__side-bar-divider">
          < Search cars={this.state.cars}/>
          </div>
          <div>
          < FilterSideBar/>
          </div>
          </div>
          <div className="item3">
          <Cars cars={this.state.cars}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default CarOffers