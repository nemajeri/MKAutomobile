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

const CarOffers = () => {
    const [carsList, setCarsList] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([2900,29000])
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMileage, setSelectedMileage] = useState(null);
    const [selectedFuel, setSelectedFuel] = useState(null);
    const [selectedTransmission, setSelectedTransmission] = useState(null);
    const [selectedDriveTrain, setSelectedDriveTrain] = useState(null);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');


    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    const getCars = () => {
      axios.get(url)
      .then((response) => {
       const carsList = response.data;
        setCarsList(carsList)
        console.log(carsList)
      })
    }

    const handleSelectMake = (make) => {
    const selectedMake = carsList.map((car) =>
    car.make === make ? car : null);
    setSelectedMake(selectedMake)
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

      if (selectedMake) {
        updatedCarsList = updatedCarsList.filter(
          (car) => car.make === selectedMake
        );
      }

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
          (car) => car.drivetrain === selectedMake
        );
      }

       // Search Filter
       if (searchInput) {
        updatedCarsList = updatedCarsList.filter(
          (car) =>
            car.make.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
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
  }, [ searchInput, selectedPrice]);

  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className="mka__content-grid-offers">
          <div className="item1">
          < CarSlider/>
          <div className="mka-responsive-item">
          < DisplayCars/>
          < CarAlignment/>
          </div>
          </div>
          <div className="item2">
            <div className="mka__side-bar-divider">
          < Search 
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
          carsList={carsList}/>
          </div>
          <div>
          < FilterSideBar/>
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