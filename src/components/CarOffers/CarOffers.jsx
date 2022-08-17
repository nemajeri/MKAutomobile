import "./CarOffers.css";
import axios from "axios";
import Cars from "./Cars";
import CarSlider from "./CarSlider";
import React from "react";
import Search from "./Search";
import FilterSideBar from "./FilterSideBar"
import CarAlignment from "./CarAlignment";
import { useEffect } from "react";
import DisplayCars from "./DisplayCars";
import { useState, useMemo } from "react";
import SortingCars from "./SortingCars";

const CarOffers = () => {
    const [carsList, setCarsList] = useState([]);
    const [selectedMake, setSelectedMake] = useState();

    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    const getCars = () => {
      axios.get(url)
      .then((response) => {
        console.log(response)
         return setCarsList(response.data)

      })
    }

    useEffect(() => {
      getCars()
  }, []);

  const getFilteredList = () => {
    if(!selectedMake) {
      return carsList
    }
    return carsList.filter((car) => car.make === selectedMake)
  }

  var filteredList = useMemo(getFilteredList, [ selectedMake, carsList ]);

  const handleMakeChange = (select) => {
    setSelectedMake(select.value) 
   }


  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          <div className="mka-responsive-item">
            <div className="mka-sorting-div__offers">
          < DisplayCars/>
          < SortingCars/>
            </div>
          < CarAlignment/>
          </div>
          </div>
          <div className="item2">
            <div className="mka__side-bar-divider">
              <h6>FAHRZEUGSUCHE</h6>
              <div className="mka__sidebar-divider"></div>
          < Search 
          carsList={carsList}/>
          </div>
          <div className="mka__sidebar-detailed-search">
            <h6>DETAILSUCHE</h6>
            <div className="mka__sidebar-divider"></div>
          < FilterSideBar
          carsList={carsList}
          handleMakeChange={handleMakeChange} />
          <button className="btn shorter">
            <svg class="button" width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Zurucksetzen</span>
          </button>
          </div>
          </div>
          <div className="item3">
        <Cars filteredList={filteredList}/> 
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CarOffers;