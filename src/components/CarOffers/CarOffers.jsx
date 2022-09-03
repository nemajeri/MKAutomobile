import "./CarOffers.css";
import axios from "axios";
import CarsItem from './CarsItem';
import CarSlider from "./CarSlider";
import Search from "./Search";
import FilterSideBar from "./FilterSideBar"
import DisplayCars from "./DisplayCars";
import React, { useState, useEffect } from "react";
import SortingCars from "./SortingCars";
import Pagination from "./Pagination"
import './Cars.css';
import PropTypes from 'prop-types';
import AlignItem1 from './AlignItem1'
import { AlignItem2 } from './AlignItem2'
import { AlignItem3 } from './AlignItem3'
import { AlignItem4 } from './AlignItem4'
import './CarAlignment.css'


const CarOffers = () => {
  const [carsList, setCarsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMileage, setSelectedMileage] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedTransmission, setSelectedTransmission] = useState(null);
  const [selectedDriveTrain, setSelectedDriveTrain] = useState(null);
  const [filteredCarsList, setFilteredCarsList] = useState([]);
  const [sliderValues, setSliderValues] = useState([2900,29000]);
  const [displayedCars, setDisplayedCars] = useState(12);
  const [selectedCarSortingMethod, setSelectedCarSortingMethod] = useState('');
  const [isActive, setIsActive] = useState(false);
  
    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    useEffect(() => {
      fetchCars()
      // eslint-disable-next-line
            }, []);

  useEffect(() => {
    applyFilters()
    // eslint-disable-next-line
          }, [selectedMake, selectedModel, selectedYear, selectedMileage, selectedFuel, selectedTransmission, selectedDriveTrain, sliderValues, selectedCarSortingMethod]);

  const fetchCars = async () => {
    try {
    setLoading(true);
    const res = await axios.get(url);
    setCarsList(res.data);
    setFilteredCarsList(res.data)
    setLoading(false); }
    catch (error) {
      console.log(error.response.data.error)
    }
  }

    const applyFilters = ( sliderValues ) => {
      let filteredCarsList = carsList

      if(selectedMake) {
          filteredCarsList = carsList.filter(car => car.make === selectedMake)
      } 

      if (selectedModel){
          filteredCarsList = carsList.filter(car => car.model === selectedModel) 
      }

      if (selectedYear){
        filteredCarsList = carsList.filter(car => car.year === selectedYear) 
      }

      if (selectedMileage){
        filteredCarsList = carsList.filter(car => car.mileage === selectedMileage) 
      }

      if (selectedFuel){
        filteredCarsList = carsList.filter(car => car.fuel === selectedFuel) 
      }

      if (selectedTransmission){
        filteredCarsList = carsList.filter(car => car.transmission === selectedTransmission) 
      }

      if (selectedDriveTrain){
        filteredCarsList = carsList.filter(car => car.drivetrain === selectedDriveTrain) 
      }

      if (selectedCarSortingMethod === 'Sortieren nach Preis'){
        filteredCarsList = carsList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)) 
      } else if (selectedCarSortingMethod === 'Sortieren nach Jahr') {
        filteredCarsList = carsList.sort((a, b) => parseFloat(a.year) - parseFloat(b.year)) 
        console.log(filteredCarsList)
      }

      console.log(sliderValues)
     // if (sliderValues) {
     //   filteredCarsList = carsList.filter(car => minPrice >= car.price && car.price <= maxPrice )
     // }

      setFilteredCarsList(filteredCarsList)   
}

  const handleSliderChange = sliderValues => {
    setSliderValues(sliderValues)
  };

  const handleMakeChange = (select) => {
    setSelectedMake(select.value) 
   }

  const handleModelChange = (select) => {
    setSelectedModel(select.value) 
   }

  const handleYearChange = (select) => {
    setSelectedYear(select.value) 
   } 

   const handleFuelChange = (select) => {
    setSelectedFuel(select.value) 
   } 

   const handleTransmissionChange = (select) => {
    setSelectedTransmission(select.value) 
   } 

   const handleDriveTrainChange = (select) => {
    setSelectedDriveTrain(select.value) 
   }

   const handleMileageChange = (select) => {
    setSelectedMileage(select.value) 
   }

   const handleDisplayedCarsChange = (select) => {
    setDisplayedCars(select.value) 
   }

   const handleSelectedCarSortingMethod = (select) => {
    setSelectedCarSortingMethod(select.value) 
   }

   const handleDisableFilters = () => {
    setLoading(true);
    setFilteredCarsList(filteredCarsList)
   }

   const toggleClass = () => {
      setIsActive(!isActive);
   }
   
  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container">
        <div className="mka__content-car-offers">
          <div className={ isActive ? "mka__content-car-offers menu-right" : "mka__content-car-offers menu-left"}>
          <div className="item1">
          < CarSlider 
          handleSliderChange={handleSliderChange}
          sliderValues={sliderValues} 
          />
          <div className="mka-responsive-item">
            <div className="mka-sorting-div__offers">
          <DisplayCars
          handleDisplayedCarsChange={handleDisplayedCarsChange}
          />
          <SortingCars
          handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}/>
            </div>
            <div className='mka__div-icon1'>
            <span className='mka__span-icon1'>
            <i className='mka__i-icon1' onClick={(prevState) => setIsActive(prevState)}>
                <AlignItem1 className={'mka__i-icon-color'}/>
                </i>
                </span>
                <span className='mka__span-icon1'>
            <i className='mka__i-icon1' onClick={toggleClass}>
                <AlignItem2 />
                </i>
                </span>
                <span className='mka__span-icon1'>
            <i className='mka__i-icon1'>
                <AlignItem3 />
                </i>
                </span>
                <span className='mka__span-icon1'>
            <i className='mka__i-icon1'>
                <AlignItem4 />
                </i>
                </span>
                  </div>
          </div>
          </div>
          <div className="item2">
            <div className="mka__side-bar-divider">
              <h6>FAHRZEUGSUCHE</h6>
              <div className="mka__sidebar-divider"></div>
          <Search 
          carsList={carsList}/>
          </div>
          <div className="mka__sidebar-detailed-search">
            <h6>DETAILSUCHE</h6>
            <div className="mka__sidebar-divider"></div>
          <FilterSideBar
          carsList={carsList}
          filteredCarsList={filteredCarsList}
          handleMakeChange={handleMakeChange}
          handleModelChange={handleModelChange}
          handleYearChange={handleYearChange}
          handleMileageChange={handleMileageChange} 
          handleFuelChange={handleFuelChange}
          handleTransmissionChange={handleTransmissionChange}
          handleDriveTrainChange={handleDriveTrainChange}
          />
          <button onClick={handleDisableFilters} className="btn shorter left-alignment">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span id="btn-txt">Zurucksetzen</span>
          </button>
          </div>
          </div>
          <div className="item3">
            { loading === true 
            ? <h2>Loading...</h2>
            :  <div className='mka__cars-grid'>
            {filteredCarsList.map(car =>
                <CarsItem key={car.id} car={car}/>)}
            </div>}
            <Pagination itemsPerPage={displayedCars} filteredCarsList={filteredCarsList}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CarOffers.propTypes = {
  selectedCarSortingMethod: PropTypes.string
};


export default CarOffers;



