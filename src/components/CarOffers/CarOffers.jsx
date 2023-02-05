import React, { useState, useEffect } from 'react';
import { TopBarWithFilters, SideBar } from './index';
import { useSelector, useDispatch } from 'react-redux';
import PaginatedCars from './PaginatedCars';
import {
  setSliderValues,
  setFilteredCarsList,
  setIsLoading,
} from '../utils/store';

import './CarOffers.css';

const initialCarsAttributes = {
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
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(initialState);
  const { allCars, isLoading, filteredCarsList, sliderValues } = useSelector(
    (state) => ({
      allCars: state.allCars,
      isLoading: state.isLoading,
      filteredCarsList: state.filteredCarsList,
      sliderValues: state.sliderValues,
      carsToCompare: state.carsToCompare,
    })
  );
  const [selectedCarSortingMethod, setSelectedCarSortingMethod] =
    useState(null);
  const [carsPerPage, setCarsPerPage] = useState(12);
  const [state, setState] = useState(initialCarsAttributes);
  const [selectedValue, setSelectedValue] = useState({ value: '12', label: '12' });
  const [selectedSortingMethod, setSelectedSortingMethod] = useState({ value: 'Sortieren nach Preis', label: 'Sortieren nach Preis' });

  useEffect(() => {
    dispatch(setIsLoading(false));
    applyFilters();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [state, selectedCarSortingMethod, isLoading]);

  const handleSliderChange = (sliderValues) => {
    setSliderValues(sliderValues);
  };

  const onChangeValue = (field) => (select) => {
    setState({ [field]: select.value });
  };
  const handleMakeChange = onChangeValue('make');
  const handleModelChange = onChangeValue('model');
  const handleYearChange = onChangeValue('year');
  const handleMileageChange = onChangeValue('mileage');
  const handleFuelChange = onChangeValue('fuel');
  const handleTransmissionChange = onChangeValue('transmission');
  const handleDriveTrainChange = onChangeValue('driveTrain');

  const handleCarsPerPageChange = (select) => {
    setCarsPerPage(select.value);
  };

  const handleSelectedCarSortingMethod = (select) => {
    setSelectedCarSortingMethod(select.value);
  };

  const toggleClass = (view) => (e) => {
    setIsActive(view);
  };

  const view2 = 'mka__default-layout-left__sidebar';
  const view3 = 'mka__full-width-layout-right__sidebar';
  const view4 = 'mka__full-width-layout-left__sidebar';

  const filterCars = (key, value, cars) => {
    switch (key) {
      case 'make':
        return cars.filter((car) => car.make === value);
      case 'model':
        return cars.filter((car) => car.model === value);
      case 'year':
        return cars.filter((car) => car.year === value);
      case 'mileage':
        return cars.filter((car) => car.mileage === value);
      case 'fuel':
        return cars.filter((car) => car.fuel === value);
      case 'transmission':
        return cars.filter((car) => car.transmission === value);
      case 'driveTrain':
        return cars.filter((car) => car.drivetrain === value);
      default:
        return cars;
    }
  };

  const toggleDefaultLeftSidebarLayout = toggleClass(view2);
  const toggleFullWidthRightSidebarLayout = toggleClass(view3);
  const toggleFullWidthLeftSidebarLayout = toggleClass(view4);

  var allFilteredCars = allCars;

  const applyFilters = () => {
    if (state.make) {
      allFilteredCars = filterCars('make', state.make, allFilteredCars);
    }

    if (state.model) {
      allFilteredCars = filterCars('model', state.model, allFilteredCars);
    }

    if (state.year) {
      allFilteredCars = filterCars('year', state.year, allFilteredCars);
    }

    if (state.mileage) {
      allFilteredCars = filterCars('mileage', state.mileage, allFilteredCars);
    }

    if (state.fuel) {
      allFilteredCars = filterCars('fuel', state.fuel, allFilteredCars);
    }

    if (state.transmission) {
      allFilteredCars = filterCars(
        'transmission',
        state.transmission,
        allFilteredCars
      );
    }

    if (state.driveTrain) {
      allFilteredCars = filterCars(
        'driveTrain',
        state.driveTrain,
        allFilteredCars
      );
    }

    if (
      selectedCarSortingMethod != null &&
      selectedCarSortingMethod === 'Sortieren nach Preis'
    ) {
      allFilteredCars = allFilteredCars.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
    }

    if (
      selectedCarSortingMethod != null &&
      selectedCarSortingMethod === 'Sortieren nach Jahr'
    ) {
      allFilteredCars = allFilteredCars.sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
      );
    }

    dispatch(setFilteredCarsList(allFilteredCars));
  };

  const resetFiltersOnClick = () => {
    setCarsPerPage(12);
    setSelectedCarSortingMethod('Sortieren von Date');
    setState(initialCarsAttributes);
    setSelectedValue({ value: '12', label: '12' });
    setSelectedSortingMethod({ value: 'Sortieren nach Preis', label: 'Sortieren nach Preis' });
  };

  const filterOnSubmittedSliderValuesChange = defaultValues => {
    const [min, max] = defaultValues;
      allFilteredCars = allFilteredCars.filter(
        (car) => min <= car.price && max >= car.price
      );
      dispatch(setFilteredCarsList(allFilteredCars));
  };

  return (
    <div className='mka__wrapper car-offers'>
      <div className='mka__container'>
        <div className='mka__content-car-offers'>
          <div className={`mka__content-car-offers__main-grid ${isActive}`}>
            <TopBarWithFilters
              isLoading={isLoading}
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
              filterOnSubmittedSliderValuesChange={
                filterOnSubmittedSliderValuesChange
              }
              setSelectedValue={setSelectedValue}
              selectedValue={selectedValue}
              selectedSortingMethod={selectedSortingMethod} 
              setSelectedSortingMethod={setSelectedSortingMethod}
            />
            <SideBar
              allCars={allCars}
              filteredCarsList={filteredCarsList}
              handleMakeChange={handleMakeChange}
              handleModelChange={handleModelChange}
              handleYearChange={handleYearChange}
              handleMileageChange={handleMileageChange}
              handleFuelChange={handleFuelChange}
              handleTransmissionChange={handleTransmissionChange}
              handleDriveTrainChange={handleDriveTrainChange}
              resetFiltersOnClick={resetFiltersOnClick}
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
