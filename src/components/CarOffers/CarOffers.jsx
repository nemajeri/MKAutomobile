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
import { useState } from "react";
import SortingCars from "./SortingCars";

const CarOffers = () => {
    const [carsList, setCarsList] = useState([]);
    const [selectedMake, setSelectedMake] = useState(undefined);


    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    const getCars = () => {
      axios.get(url)
      .then((response) => {
        console.log(response)
         return setCarsList(response.data)

      })
   }

   const applyFilters = () => {
    if(selectedMake) {
    let updatedCarsList = carsList
    updatedCarsList = carsList.filter(car => car.make === selectedMake)
    setCarsList(prev => [...prev, updatedCarsList])
    console.log(updatedCarsList)
    }
  }


  
  const handleMakeChange = (select) => {
    setSelectedMake(select.value) 
   }

    useEffect(() => {
      applyFilters()
      getCars()
  }, [ selectedMake ]);

  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          <div className="mka-responsive-item">
          < DisplayCars/>
          < SortingCars/>
          < CarAlignment/>
          </div>
          </div>
          <div className="item2">
            <div className="mka__side-bar-divider">
          < Search 
          carsList={carsList}/>
          </div>
          <div>
          < FilterSideBar
          carsList={carsList}
          handleMakeChange={handleMakeChange} />
          </div>
          </div>
          <div className="item3">
        <Cars carsList={carsList}/> 
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CarOffers;