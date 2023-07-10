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
  setIsActiveClass,
  initialClass,
  isActiveClass,
  toggleDefaultLeftSidebarLayout,
  toggleFullWidthRightSidebarLayout,
  toggleFullWidthLeftSidebarLayout,
  isLoading,
  applyFilters,
  setSelectedValue,
  selectedValue,
}) => {
  const colourStyles = {
    control: (styles) => ({
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
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: 'black',
        fontFamily: 'Roboto',
        zIndex: 100,
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
        handleSliderChange={handleSliderChange}
        sliderValues={sliderValues}
        applyFilters={applyFilters}
      />
      <div className='mka-responsive-item'>
        <div className='mka-sorting-div__offers'>
          <CarsPerPage
            handleCarsPerPageChange={handleCarsPerPageChange}
            colourStyles={colourStyles}
            setSelectedValue={setSelectedValue}
            selectedValue={selectedValue}
          />
          <SortingCars
            handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}
            colourStyles={colourStyles}
          />
        </div>
        <div className='mka__icons-container'>
          <span
            className='mka__individual-icon'
            onClick={() => setIsActiveClass(initialClass)}
          >
            <DefaultRightSideBarAlignmentIcon isActiveClass={isActiveClass} />
          </span>
          <span
            className='mka__individual-icon'
            onClick={toggleDefaultLeftSidebarLayout}
          >
            <DefaultLeftSideBarAlignmentIcon isActiveClass={isActiveClass} />
          </span>
          <span
            className='mka__individual-icon'
            onClick={toggleFullWidthRightSidebarLayout}
          >
            <FullWidthRightSideBarAlignmentIcon isActiveClass={isActiveClass} />
          </span>
          <span
            className='mka__individual-icon'
            onClick={toggleFullWidthLeftSidebarLayout}
          >
            <FullWidthLeftSideBarAlignmentIcon isActiveClass={isActiveClass} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBarWithFilters;
