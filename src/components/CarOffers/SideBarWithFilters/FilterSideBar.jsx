import React from 'react';
import MakeFilter from './MakeFilter';
import ModelFilter from './ModelFilter';
import YearFilter from './YearFilter';
import MileageFilter from './MileageFilter';
import TransmissionFilter from './TransmissionFilter';
import FuelFilter from './FuelFilter';
import DriveTrainFilter from './DriveTrainFilter';

const FilterSideBar = ({
  array,
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
        array={array}
        handleMakeChange={handleMakeChange}
        colourStyles={colourStyles}
      />
      <ModelFilter
        handleModelChange={handleModelChange}
        array={array}
        colourStyles={colourStyles}
      />
      <YearFilter
        handleYearChange={handleYearChange}
        array={array}
        colourStyles={colourStyles}
      />
      <MileageFilter
        handleMileageChange={handleMileageChange}
        array={array}
        colourStyles={colourStyles}
      />
      <FuelFilter
        handleFuelChange={handleFuelChange}
        array={array}
        colourStyles={colourStyles}
      />
      <TransmissionFilter
        handleTransmissionChange={handleTransmissionChange}
        array={array}
        colourStyles={colourStyles}
      />
      <DriveTrainFilter
        handleDriveTrainChange={handleDriveTrainChange}
        array={array}
        colourStyles={colourStyles}
      />
    </>
  );
};

export default FilterSideBar;
