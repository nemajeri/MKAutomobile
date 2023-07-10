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

const initialClass = 'mka__default-layout-right__sidebar';

const CarOffers = () => {
  const dispatch = useDispatch();
  const [isActiveClass, setIsActiveClass] = useState(initialClass);
  const [isResetting, setIsResetting] = useState(false);
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
  const [state, setState] = useState({});
  const [selectedValue, setSelectedValue] = useState({
    value: '12',
    label: '12',
  });

  useEffect(() => {
    dispatch(setIsLoading(false));
    applyFilters();
    // eslint-disable-next-line
  }, [state, selectedCarSortingMethod, isLoading, sliderValues]);

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

  const toggleClass = (view) => () => {
    setIsActiveClass(view);
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

  const applyFilters = (sliderValues) => {
    let filteredCars = allCars;
    
    if (state.make) {
      filteredCars = filterCars('make', state.make, allCars);
    }

    if (state.model) {
      filteredCars = filterCars('model', state.model, filteredCars);
    }

    if (state.year) {
      filteredCars = filterCars('year', state.year, filteredCars);
    }

    if (state.mileage) {
      filteredCars = filterCars('mileage', state.mileage, filteredCars);
    }

    if (state.fuel) {
      filteredCars = filterCars('fuel', state.fuel, filteredCars);
    }

    if (state.transmission) {
      filteredCars = filterCars('transmission', state.transmission, filteredCars);
    }

    if (state.driveTrain) {
      filteredCars = filterCars('driveTrain', state.driveTrain, filteredCars);
    }

    if (sliderValues) {
      const [minPrice, maxPrice] = sliderValues;
      filteredCars = filteredCars.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
    }

    if (
      selectedCarSortingMethod === 'Sortieren nach Preis'
    ) {
      filteredCars.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
    }

    if (
      selectedCarSortingMethod === 'Sortieren nach Jahr'
    ) {
      filteredCars.sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
      );
    }


    dispatch(setFilteredCarsList(filteredCars));
  };

  const resetFiltersOnClick = () => {
    setCarsPerPage(12);
    setSelectedCarSortingMethod('Sortieren nach Preis');
    setState({});
    setSelectedValue({ value: '12', label: '12' });
    setIsResetting(true);
  };

  return (
    <div className='mka__wrapper car-offers'>
      <div className='mka__container'>
        <div className='mka__content-car-offers'>
          <div
            className={`mka__content-car-offers__main-grid ${isActiveClass}`}
          >
            <TopBarWithFilters
              isLoading={isLoading}
              handleSliderChange={handleSliderChange}
              sliderValues={sliderValues}
              handleCarsPerPageChange={handleCarsPerPageChange}
              handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}
              setIsActiveClass={setIsActiveClass}
              initialClass={initialClass}
              isActiveClass={isActiveClass}
              toggleDefaultLeftSidebarLayout={toggleDefaultLeftSidebarLayout}
              toggleFullWidthRightSidebarLayout={
                toggleFullWidthRightSidebarLayout
              }
              toggleFullWidthLeftSidebarLayout={
                toggleFullWidthLeftSidebarLayout
              }
              applyFilters={applyFilters}
              setSelectedValue={setSelectedValue}
              selectedValue={selectedValue}
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
              isResetting={isResetting}
              setIsResetting={setIsResetting}
              state={state}
            />
            <PaginatedCars
              isLoading={isLoading}
              isActiveClass={isActiveClass}
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
