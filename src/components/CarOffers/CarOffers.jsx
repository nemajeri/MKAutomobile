import "./CarOffers.css"
import Cars from "../CarsItem/Cars"
import axios from 'axios';
import React, { Component } from "react";

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
          <Cars loading={this.state.loading} cars={this.state.cars}/>
        </div>
      </div>
    </div>
  )
}
}

export default CarOffers