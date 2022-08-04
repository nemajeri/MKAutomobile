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
    const [selectedPrice, setSelectedPrice] = useState([2900,29000])
    const [selectedMake, setSelectedMake] = useState(undefined);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMileage, setSelectedMileage] = useState(null);
    const [selectedFuel, setSelectedFuel] = useState(null);
    const [selectedTransmission, setSelectedTransmission] = useState(null);
    const [selectedDriveTrain, setSelectedDriveTrain] = useState(null);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [selectSortByPriceUp, setSelectSortByPriceUp] = useState(null);


    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    const applyFilters = (cars) => {
      let updatedCarsList = cars;
  
      if (selectedMake){
        updatedCarsList = updatedCarsList.filter(
           car => car.make ===  selectedMake
        )
     }; 


      if (selectedModel) {
        updatedCarsList = carsList.filter(
          car => car.model === selectedModel
        );
      }
  
      if (selectedYear) {
        updatedCarsList = carsList.filter(
          car => car.year === selectedYear
        );
      }

      if (selectedMileage) {
        updatedCarsList = carsList.filter(
          car => car.mileage === selectedMileage
        );
      }

      if (selectedFuel) {
        updatedCarsList = carsList.filter(
          (car) => car.fuel === selectedFuel
        );
      }

      if (selectedTransmission) {
        updatedCarsList = carsList.filter(
          (car) => car.transmission === selectedTransmission
        );
      }

      if (selectedDriveTrain) {
        updatedCarsList = carsList.filter(
          (car) => car.drivetrain === selectedMake
        );
      }

      // Price Filter
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];
  
      updatedCarsList = updatedCarsList.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
      setCarsList(updatedCarsList);
    };

    const getCars = () => {
      axios.get(url)
      .then((response) => {
         return applyFilters(response.data)
      })
   }

   const handleMakeChange = (select) => {
    setSelectedMake(select.value) 
   }

   const handleModelChange = (select) => {
    setSelectedModel(select.value) 
   }

   const handleYearChange = (select) => {
    setSelectedYear(select.value) 
   }

   const handleMileageChange = (select) => {
    setSelectedMileage(select.value)
   }

    const handleSortByPriceUp = (e) => {
    const selectSortByPriceUp = [...carsList].sort((a, b) => b.price - a.price);
    setSelectSortByPriceUp(selectSortByPriceUp)
    }
   
    useEffect(() => {
      getCars()
  }, [ selectedMake, selectedModel, selectedYear, selectedMileage]);

  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          <div className="mka-responsive-item">
          < DisplayCars/>
          < SortingCars
          handleSortByPriceUp={handleSortByPriceUp}
          />
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
          handleMakeChange={handleMakeChange} 
          handleModelChange={handleModelChange}
          handleYearChange={handleYearChange}
          handleMileageChange={handleMileageChange}/>
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