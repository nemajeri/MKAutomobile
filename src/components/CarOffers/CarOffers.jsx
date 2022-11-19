import React, { useState, useEffect } from 'react';
import { TopBarWithFilters, SideBar } from './index';
import PaginatedCars from './PaginatedCars';
import { useAPI } from '../utils/CarsContext';
import './CarOffers.css';

const initiallCarsAttributes = {
  make: null,
  model: null,
  year: null,
  mileage: null,
  fuel: null,
  transmission: null,
  driveTrain: null,
};

const initialState = 'mka__default-layout-right__sidebar';

const CarOffers = () => {
  const [isActive, setIsActive] = useState(initialState);
  const { array, loader, filteredArray, priceRangeSliderValues } = useAPI();
  const [isLoading] = loader;
  const [filteredCarsList, setFilteredCarsList] = filteredArray;
  const [state, setState] = useState(initiallCarsAttributes);
  const [sliderValues, setSliderValues] = priceRangeSliderValues;
  const [selectedCarSortingMethod, setSelectedCarSortingMethod] =
    useState(null);
  const [carsPerPage, setCarsPerPage] = useState(12);

  useEffect(() => {
    applyFilters();
  }, [state, selectedCarSortingMethod]);

  const handleSliderChange = sliderValues => {
    setSliderValues(sliderValues);
  };

  const onChangeValue = field => select => {
    setState({ [field]: select.value });
  };
  const handleMakeChange = onChangeValue('make');
  const handleModelChange = onChangeValue('model');
  const handleYearChange = onChangeValue('year');
  const handleMileageChange = onChangeValue('mileage');
  const handleFuelChange = onChangeValue('fuel');
  const handleTransmissionChange = onChangeValue('transmission');
  const handleDriveTrainChange = onChangeValue('driveTrain');

  const handleCarsPerPageChange = select => {
    setCarsPerPage(select.value);
  };

  const handleSelectedCarSortingMethod = select => {
    setSelectedCarSortingMethod(select.value);
  };

  const toggleClass = view => e => {
    setIsActive(view);
  };

  const view2 = 'mka__default-layout-left__sidebar';
  const view3 = 'mka__full-width-layout-right__sidebar';
  const view4 = 'mka__full-width-layout-left__sidebar';

  const toggleDefaultLeftSidebarLayout = toggleClass(view2);
  const toggleFullWidthRightSidebarLayout = toggleClass(view3);
  const toggleFullWidthLeftSidebarLayout = toggleClass(view4);

  const applyFilters = () => {
    var allFilteredCars = array;

    if (state.make) {
      allFilteredCars = array.filter(car => car.make === state.make);
    }

    if (state.model) {
      allFilteredCars = array.filter(car => car.model === state.model);
    }

    if (state.year) {
      allFilteredCars = array.filter(car => car.year === state.year);
    }

    if (state.mileage) {
      allFilteredCars = array.filter(car => car.mileage === state.mileage);
    }

    if (state.fuel) {
      allFilteredCars = array.filter(car => car.fuel === state.fuel);
    }

    if (state.transmission) {
      allFilteredCars = array.filter(
        car => car.transmission === state.transmission
      );
    }

    if (state.driveTrain) {
      allFilteredCars = array.filter(
        car => car.drivetrain === state.driveTrain
      );
    }

    if (
      selectedCarSortingMethod != null &&
      selectedCarSortingMethod === 'Sortieren nach Preis'
    ) {
      allFilteredCars = array.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
    }

    if (
      selectedCarSortingMethod != null &&
      selectedCarSortingMethod === 'Sortieren nach Jahr'
    ) {
      allFilteredCars = array.sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
      );
    }

    // const minPrice = sliderValues[0];
    // const maxPrice = sliderValues[1];

    // if (sliderValues) {
    //   allFilteredCars = array.filter(
    //     car => minPrice < car.price && maxPrice > car.price
    //   );
    // }

    setFilteredCarsList(allFilteredCars);
  };

  return (
    <div className='mka__wrapper car-offers'>
      <div className='mka__container'>
        <div className='mka__content-car-offers'>
          <div className={`mka__content-car-offers__main-grid ${isActive}`}>
            <TopBarWithFilters
              handleSliderChange={handleSliderChange}
              sliderValues={sliderValues}
              handleCarsPerPageChange={handleCarsPerPageChange}
              handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}
              setIsActive={setIsActive}
              initialState={initialState}
              isActive={isActive}
              toggleDefaultLeftSidebarLayout={toggleDefaultLeftSidebarLayout}
              toggleFullWidthRightSidebarLayout={
                toggleFullWidthRightSidebarLayout
              }
              toggleFullWidthLeftSidebarLayout={
                toggleFullWidthLeftSidebarLayout
              }
            />
            <SideBar
              array={array}
              filteredCarsList={filteredCarsList}
              handleMakeChange={handleMakeChange}
              handleModelChange={handleModelChange}
              handleYearChange={handleYearChange}
              handleMileageChange={handleMileageChange}
              handleFuelChange={handleFuelChange}
              handleTransmissionChange={handleTransmissionChange}
              handleDriveTrainChange={handleDriveTrainChange}
            />
            <PaginatedCars
              isLoading={isLoading}
              isActive={isActive}
              initialState={initialState}
              filteredCarsList={filteredCarsList}
              carsPerPage={carsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarOffers;
