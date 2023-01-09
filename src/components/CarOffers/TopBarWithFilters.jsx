import React from 'react';
import { CarSlider, CarsPerPage, SortingCars } from './index';
import {
  DefaultRightSideBarAlignmentIcon,
  DefaultLeftSideBarAlignmentIcon,
  FullWidthRightSideBarAlignmentIcon,
  FullWidthLeftSideBarAlignmentIcon,
} from '../utils/AlignmentIcons/index';

const TopBarWithFilters = ({
  sliderValueChanged,
  sliderValues,
  handleCarsPerPageChange,
  handleSelectedCarSortingMethod,
  setIsActive,
  initialState,
  isActive,
  toggleDefaultLeftSidebarLayout,
  toggleFullWidthRightSidebarLayout,
  toggleFullWidthLeftSidebarLayout,
  isLoading,
}) => {
  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      borderRadius: '0px',
      fontSize: '14px',
      fontFamily: 'Roboto',
    }),
    option: (styles, state) => {
      return {
        ...styles,
        backgroundColor: state.isSelected ? '#393939' : 'black',
        color: '#999999',
        fontSize: '14px',
      };
    },
    menu: styles => {
      return {
        ...styles,
        backgroundColor: 'black',
        fontFamily: 'Roboto',
        zIndex: 100
      };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
  };

  return (
    <div className='mka__filters-and-views'>
      <CarSlider
        isLoading={isLoading}
        sliderValueChanged={sliderValueChanged}
        sliderValues={sliderValues}
      />
      <div className='mka-responsive-item'>
        <div className='mka-sorting-div__offers'>
          <CarsPerPage
            handleCarsPerPageChange={handleCarsPerPageChange}
            colourStyles={colourStyles}
          />
          <SortingCars
            handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}
            colourStyles={colourStyles}
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
