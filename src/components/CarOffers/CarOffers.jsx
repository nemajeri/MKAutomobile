import "./CarOffers.css"
import Cars from "../CarsItem/Cars"
import CarSlider from "../CarSlider/CarSlider";
import axios from 'axios';
import React, { Component } from "react";
import Search from "../Search/Search";
import FilterSideBar from "../FilterSideBar/FilterSideBar"
import CarSorting from "../CarSorting/CarSorting";
import CarAlignment from "../CarAlignment/CarAlignment";

class CarOffers extends Component {
  state = {
    cars: [],
    loading: false
}

async componentDidMount() {
this.setState({loading: true})

const res = await axios.get('http://finity.pro/clients/mkautomobile/cars/all');

this.setState({cars: res.data, loading: false});

}
  render () {
  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container-car-offers">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          < CarSorting/>
          < CarAlignment/>
          </div>
          <div className="item2">
            <div className="mka__side-bar-divider">
          < Search/>
          </div>
          <div>
          < FilterSideBar/>
          </div>
          </div>
          <div className="item3">
          <Cars loading={this.state.loading} cars={this.state.cars}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default CarOffers