import React from 'react';
import Button from '../utils/Button';
import { Search, FilterSideBar } from './index';

const SideBar = ({
  array,
  handleMakeChange,
  handleModelChange,
  handleYearChange,
  handleMileageChange,
  handleFuelChange,
  handleTransmissionChange,
  handleDriveTrainChange,
}) => {
  return (
    <div className='mka__search-and-filters'>
      <div className='mka__side-bar-divider'>
        <h6>FAHRZEUGSUCHE</h6>
        <div className='mka__sidebar-divider'></div>
        <Search array={array} />
      </div>
      <div className='mka__sidebar-detailed-search'>
        <h6>DETAILSUCHE</h6>
        <div className='mka__sidebar-divider'></div>
        <FilterSideBar
          array={array}
          handleMakeChange={handleMakeChange}
          handleModelChange={handleModelChange}
          handleYearChange={handleYearChange}
          handleMileageChange={handleMileageChange}
          handleFuelChange={handleFuelChange}
          handleTransmissionChange={handleTransmissionChange}
          handleDriveTrainChange={handleDriveTrainChange}
        />
        <Button />
      </div>
    </div>
  );
};

export default SideBar;
