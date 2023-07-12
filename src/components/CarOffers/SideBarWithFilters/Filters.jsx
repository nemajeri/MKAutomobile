import React from 'react';
import MakeFilter from './MakeFilter';
import ModelFilter from './ModelFilter';
import YearFilter from './YearFilter';
import MileageFilter from './MileageFilter';
import TransmissionFilter from './TransmissionFilter';
import FuelFilter from './FuelFilter';
import DriveTrainFilter from './DriveTrainFilter';

const FilterSideBar = ({
  filteredCarsList,
  handleMakeChange,
  handleModelChange,
  handleYearChange,
  handleMileageChange,
  handleFuelChange,
  handleTransmissionChange,
  handleDriveTrainChange,
  isResetting,
  setIsResetting,
  carFilteringAttributes
}) => {
  const colourStyles = {
    control: (styles, { isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled ? 'lightgray' :'transparent',
      borderRadius: '0px',
      marginBottom: '10px',
      fontFamily: 'Roboto',
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: 'black',
        marginBottom: '10px',
        color: 'grey',
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: 'black',
        fontFamily: 'Roboto',
      };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
  };

  return (
    <>
      <MakeFilter
        handleMakeChange={handleMakeChange}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
      />
      <ModelFilter
        handleModelChange={handleModelChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        carFilteringAttributes={carFilteringAttributes}
      />
      <YearFilter
        handleYearChange={handleYearChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        carFilteringAttributes={carFilteringAttributes}
      />
      <MileageFilter
        handleMileageChange={handleMileageChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        carFilteringAttributes={carFilteringAttributes}
      />
      <FuelFilter
        handleFuelChange={handleFuelChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        carFilteringAttributes={carFilteringAttributes}
      />
      <TransmissionFilter
        handleTransmissionChange={handleTransmissionChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        carFilteringAttributes={carFilteringAttributes}
      />
      <DriveTrainFilter
        handleDriveTrainChange={handleDriveTrainChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        carFilteringAttributes={carFilteringAttributes}
      />
    </>
  );
};

export default FilterSideBar;
