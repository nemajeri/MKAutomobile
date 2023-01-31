import React from 'react';
import Button from '../utils/Button';
import { Search, FilterSideBar } from './index';

const SideBar = ({
  array,
  filteredCarsList,
  handleMakeChange,
  handleModelChange,
  handleYearChange,
  handleMileageChange,
  handleFuelChange,
  handleTransmissionChange,
  handleDriveTrainChange,
  resetFiltersOnClick,
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
        <div className='mka__sidebar-button--and-filters_alignment'>
          <FilterSideBar
            filter
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
          <Button
            className={'mka__siderbar-button'}
            onClick={resetFiltersOnClick}
          >
            Zurücksetzen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
