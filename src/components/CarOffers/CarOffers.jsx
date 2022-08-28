import "./CarOffers.css";
import axios from "axios";
import Cars from "./Cars";
import CarSlider from "./CarSlider";
import Search from "./Search";
import FilterSideBar from "./FilterSideBar"
import CarAlignment from "./CarAlignment";
import DisplayCars from "./DisplayCars";
import React, { useState, useEffect } from "react";
import SortingCars from "./SortingCars";

const CarOffers = () => {
  const [carsList, setCarsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMake, setSelectedMake] = useState();
  const [filteredCarsList, setFilteredCarsList] = useState([]);
    const url = "http://finity.pro/clients/mkautomobile/cars/all";

    useEffect(() => {
      fetchCars()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterByMake()
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [selectedMake]);

  const fetchCars = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setFilteredCarsList(res.data)
    setCarsList(res.data);
    setLoading(false);
  }

    const filterByMake = () => {
    const filteredCarsList = selectedMake ? carsList.filter(car => car.make === selectedMake) : carsList;
    setFilteredCarsList(filteredCarsList);
    console.log(filteredCarsList)
}
  
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
          <DisplayCars/>
          <SortingCars/>
            </div>
          <CarAlignment/>
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
          handleMakeChange={handleMakeChange} />
          <button className="btn shorter left-alignment">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span id="btn-txt">Zurucksetzen</span>
          </button>
          </div>
          </div>
          <div className="item3">
            <Cars filteredCarsList={filteredCarsList} loading={loading}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CarOffers;