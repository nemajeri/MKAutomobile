import React from 'react';
import MakeFilter from './MakeFilter';
import ModelFilter from './ModelFilter';
import YearFilter from './YearFilter';
import MileageFilter from './MileageFilter';
import TransmissionFilter from './TransmissionFilter';
import FuelFilter from './FuelFilter';
import DriveTrainFilter from './DriveTrainFilter';

const FilterSideBar = ({
  carsList,
  filteredCarsList,
  handleMakeChange,
  handleModelChange,
  handleYearChange,
  handleMileageChange,
  handleFuelChange,
  handleTransmissionChange,
  handleDriveTrainChange,
}) => {
  return (
    <>
      <MakeFilter carsList={carsList} handleMakeChange={handleMakeChange} />
      <ModelFilter
        handleModelChange={handleModelChange}
        filteredCarsList={filteredCarsList}
      />
      <YearFilter
        handleYearChange={handleYearChange}
        filteredCarsList={filteredCarsList}
      />
      <MileageFilter
        handleMileageChange={handleMileageChange}
        filteredCarsList={filteredCarsList}
      />
      <FuelFilter
        handleFuelChange={handleFuelChange}
        filteredCarsList={filteredCarsList}
      />
      <TransmissionFilter
        handleTransmissionChange={handleTransmissionChange}
        filteredCarsList={filteredCarsList}
      />
      <DriveTrainFilter
        handleDriveTrainChange={handleDriveTrainChange}
        filteredCarsList={filteredCarsList}
      />
    </>
  );
};

export default FilterSideBar;
