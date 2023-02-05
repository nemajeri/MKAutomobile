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
}) => {
  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      borderRadius: '0px',
      marginBottom: '10px',
      fontFamily: 'Roboto',
    }),
    option: styles => {
      return {
        ...styles,
        backgroundColor: 'black',
        color: 'grey',
      };
    },
    menu: styles => {
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
      />
      <ModelFilter
        handleModelChange={handleModelChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
      />
      <YearFilter
        handleYearChange={handleYearChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
      />
      <MileageFilter
        handleMileageChange={handleMileageChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
      />
      <FuelFilter
        handleFuelChange={handleFuelChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
      />
      <TransmissionFilter
        handleTransmissionChange={handleTransmissionChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
      />
      <DriveTrainFilter
        handleDriveTrainChange={handleDriveTrainChange}
        filteredCarsList={filteredCarsList}
        colourStyles={colourStyles}
      />
    </>
  );
};

export default FilterSideBar;
