import "./CarOffers.css"
import Cars from "./Cars"
import CarSlider from "./CarSlider";
import React from "react";
import Search from "./Search";
import FilterSideBar from "./FilterSideBar"
import CarAlignment from "./CarAlignment";
import CarSorting from "./CarSorting";
import { useEffect } from "react";

const CarOffers = () => {

  useEffect(() => {
    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          <div className="mka-responsive-item">
          < CarSorting/>
          < CarAlignment/>
          </div>
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
          <Cars/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CarOffers