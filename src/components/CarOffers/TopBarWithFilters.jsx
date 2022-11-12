import React from 'react';
import { CarSlider, CarsPerPage, SortingCars } from './index';
import {
  DefaultRightSideBarAlignmentIcon,
  DefaultLeftSideBarAlignmentIcon,
  FullWidthRightSideBarAlignmentIcon,
  FullWidthLeftSideBarAlignmentIcon,
} from '../utils/AlignmentIcons/index';

const TopBarWithFilters = ({
  handleSliderChange,
  sliderValues,
  handleCarsPerPageChange,
  handleSelectedCarSortingMethod,
  setIsActive,
  initialState,
  isActive,
  toggleDefaultLeftSidebarLayout,
  toggleFullWidthRightSidebarLayout,
  toggleFullWidthLeftSidebarLayout,
}) => {
  return (
    <div className='mka__filters-and-views'>
      <CarSlider
        handleSliderChange={handleSliderChange}
        sliderValues={sliderValues}
      />
      <div className='mka-responsive-item'>
        <div className='mka-sorting-div__offers'>
          <CarsPerPage handleCarsPerPageChange={handleCarsPerPageChange} />
          <SortingCars
            handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}
          />
        </div>
        <div className='mka__icons-container'>
          <span
            className='mka__individual-icon'
            onClick={() => setIsActive(initialState)}
          >
            <DefaultRightSideBarAlignmentIcon isActive={isActive} />
          </span>
          <span
            className='mka__individual-icon'
            onClick={toggleDefaultLeftSidebarLayout}
          >
            <DefaultLeftSideBarAlignmentIcon isActive={isActive} />
          </span>
          <span
            className='mka__individual-icon'
            onClick={toggleFullWidthRightSidebarLayout}
          >
            <FullWidthRightSideBarAlignmentIcon isActive={isActive} />
          </span>
          <span
            className='mka__individual-icon'
            onClick={toggleFullWidthLeftSidebarLayout}
          >
            <FullWidthLeftSideBarAlignmentIcon isActive={isActive} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBarWithFilters;
