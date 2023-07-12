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
const view2 = 'mka__default-layout-left__sidebar';
const view3 = 'mka__full-width-layout-right__sidebar';
const view4 = 'mka__full-width-layout-left__sidebar';

const carAttributes = Object.freeze({
  MAKE: 'make',
  MODEL: 'model',
  YEAR: 'year',
  MILEAGE: 'mileage',
  FUEL: 'fuel',
  TRANSMISSION: 'transmission',
  DRIVE_TRAIN: 'driveTrain',
});

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
  const [carFilteringAttributes, setCarFilteringAttributes] = useState({});
  const [selectedValue, setSelectedValue] = useState({
    value: '12',
    label: '12',
  });

  useEffect(() => {
    dispatch(setIsLoading(false));
    applyFilters();
    // eslint-disable-next-line
  }, [
    carFilteringAttributes,
    selectedCarSortingMethod,
    isLoading,
    sliderValues,
  ]);

  const handleSliderChange = (sliderValues) => {
    setSliderValues(sliderValues);
  };

  const onChangeValue = (field) => (select) => {
    setCarFilteringAttributes((prevState) => ({
      ...prevState,
      [field]: select.value,
    }));
  };

  const handleMakeChange = onChangeValue(carAttributes.MAKE);
  const handleModelChange = onChangeValue(carAttributes.MODEL);
  const handleYearChange = onChangeValue(carAttributes.YEAR);
  const handleMileageChange = onChangeValue(carAttributes.MILEAGE);
  const handleFuelChange = onChangeValue(carAttributes.FUEL);
  const handleTransmissionChange = onChangeValue(carAttributes.TRANSMISSION);
  const handleDriveTrainChange = onChangeValue(carAttributes.DRIVE_TRAIN);

  const handleCarsPerPageChange = (select) => {
    setCarsPerPage(select.value);
  };

  const handleSelectedCarSortingMethod = (select) => {
    setSelectedCarSortingMethod(select.value);
  };

  const toggleClass = (view) => () => {
    setIsActiveClass(view);
  };

  const filterCars = (key, value, cars) => {
    switch (key) {
      case carAttributes.MAKE:
        return cars.filter((car) => car.make === value);
      case carAttributes.MODEL:
        return cars.filter((car) => car.model === value);
      case carAttributes.YEAR:
        return cars.filter((car) => car.year === value);
      case carAttributes.MILEAGE:
        return cars.filter((car) => car.mileage === value);
      case carAttributes.FUEL:
        return cars.filter((car) => car.fuel === value);
      case carAttributes.TRANSMISSION:
        return cars.filter((car) => car.transmission === value);
      case carAttributes.DRIVE_TRAIN:
        return cars.filter((car) => car.drivetrain === value);
      default:
        return cars;
    }
  };

  const toggleDefaultLeftSidebarLayout = toggleClass(view2);
  const toggleFullWidthRightSidebarLayout = toggleClass(view3);
  const toggleFullWidthLeftSidebarLayout = toggleClass(view4);

  let filteredCars = allCars;

  const applyFilters = (sliderValues) => {
    if (carFilteringAttributes.make) {
      filteredCars = filterCars(
        carAttributes.MAKE,
        carFilteringAttributes.make,
        filteredCars
      );
    }

    if (carFilteringAttributes.model) {
      filteredCars = filterCars(
        carAttributes.MODEL,
        carFilteringAttributes.model,
        filteredCars
      );
    }

    if (carFilteringAttributes.year) {
      filteredCars = filterCars(
        carAttributes.YEAR,
        carFilteringAttributes.year,
        filteredCars
      );
    }

    if (carFilteringAttributes.mileage) {
      filteredCars = filterCars(
        carAttributes.MILEAGE,
        carFilteringAttributes.mileage,
        filteredCars
      );
    }

    if (carFilteringAttributes.fuel) {
      filteredCars = filterCars(
        carAttributes.FUEL,
        carFilteringAttributes.fuel,
        filteredCars
      );
    }

    if (carFilteringAttributes.transmission) {
      filteredCars = filterCars(
        carAttributes.TRANSMISSION,
        carFilteringAttributes.transmission,
        filteredCars
      );
    }

    if (carFilteringAttributes.driveTrain) {
      filteredCars = filterCars(
        carAttributes.DRIVE_TRAIN,
        carFilteringAttributes.driveTrain,
        filteredCars
      );
    }

    if (sliderValues) {
      const [minPrice, maxPrice] = sliderValues;
      filteredCars = filteredCars.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
    }

    if (selectedCarSortingMethod === 'Sortieren nach Preis') {
      filteredCars = filteredCars.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
    }

    if (selectedCarSortingMethod === 'Sortieren nach Jahr') {
      filteredCars = filteredCars.sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
      );
    }

    dispatch(setFilteredCarsList(filteredCars));
  };

  const resetFiltersOnClick = () => {
    setCarsPerPage(12);
    setSelectedCarSortingMethod('Sortieren nach Preis');
    setCarFilteringAttributes({});
    setSelectedValue({ value: '12', label: '12' });
    setIsResetting(true);
    dispatch(setFilteredCarsList(filteredCars));
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
              carFilteringAttributes={carFilteringAttributes}
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
