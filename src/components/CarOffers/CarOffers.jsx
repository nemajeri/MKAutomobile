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
    const [selectMake, setSelectMake] = useState(null);
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

    const getCars = () => {
      axios.get(url)
      .then((response) => {
       const carsList = response.data;
        setCarsList(carsList)
      })
    }

    const handleChange = (selectMake) => {
          setSelectMake(selectMake[0])
          console.log(selectMake)
    
       const updatedCarsList = carsList.filter(
           (car) => car.make === selectMake[0]
          )
          console.log(updatedCarsList)
           setCarsList(updatedCarsList)
       
    }


    const handleSortByPriceUp = (e) => {
      let {value} = e.target;
    const selectSortByPriceUp = [...carsList].sort((a, b) => b.price - a.price);
    setSelectSortByPriceUp(selectSortByPriceUp)
    }

    const handleSelectModel = (model) => {
      const selectedModel = carsList.map((car) =>
      car.model === model ? car : null);
      setSelectedModel(selectedModel)
      }

      const handleSelectYear = (year) => {
        const selectedYear = carsList.map((car) =>
        car.year === year ? car : null);
        setSelectedYear(selectedYear)
        }

        const handleSelectMileage = (mileage) => {
          const selectedMileage = carsList.map((car) =>
          car.mileage === mileage ? car : null);
          setSelectedMileage(selectedMileage)
          }

          const handleSelectFuel = (fuel) => {
            const selectedFuel = carsList.map((car) =>
            car.fuel === fuel ? car : null);
            setSelectedFuel(selectedFuel)
            }

            const handleSelectTransmission = (transmission) => {
              const selectedTransmission = carsList.map((car) =>
              car.transmission === transmission ? car : null);
              setSelectedTransmission(selectedTransmission)
              }

              const handleSelectDriveTrain = (drivetrain) => {
                const selectedMakes = carsList.map((car) =>
                car.drivetrain === drivetrain ? car : null);
                setSelectedDriveTrain(selectedDriveTrain)
                }

    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    };

    const applyFilters = () => {
      let updatedCarsList = carsList;


      if (selectedModel) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.model === selectedModel
        );
      }
  
      if (selectedYear) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.year === selectedYear
        );
      }

      if (selectedMileage) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.mileage === selectedMileage
        );
      }

      if (selectedFuel) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.fuel === selectedFuel
        );
      }

      if (selectedTransmission) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.transmission === selectedTransmission
        );
      }

      if (selectedDriveTrain) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.drivetrain === selectMake
        );
      }

      // Price Filter
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];
  
      updatedCarsList = updatedCarsList.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
  
      setCarsList(updatedCarsList);
  
      !updatedCarsList.length ? setResultsFound(false) : setResultsFound(true);
    };

    useEffect(() => { 
      getCars()
      applyFilters()
  }, [ selectMake, selectedPrice]);

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
          handleChange={handleChange} 
          selectMake={selectMake}/>
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


export default CarOffers