import "./CarOffers.css"
import Cars from "../CarsItem/Cars"
import CarSlider from "../CarSlider/CarSlider";
import axios from 'axios';
import React, { Component } from "react";
import Search from "../Search/Search";
import FilterSideBar from "../FilterSideBar/FilterSideBar"

class CarOffers extends Component {
  state = {
    cars: [],
    loading: false
}

async componentDidMount() {
this.setState({loading: true})

const res = await axios.get('http://finity.pro/clients/mkautomobile/cars/all');

this.setState({cars: res.data, loading: false});

    console.log(res.data)
}
  render () {
  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container-car-offers">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid offers">
          <div className="item1">
          < CarSlider/>
          </div>
          <div className="item2">
          < Search/>
          < FilterSideBar/>
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