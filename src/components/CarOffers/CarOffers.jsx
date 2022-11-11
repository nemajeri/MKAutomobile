import React, { useState, useReducer } from 'react';
import CarOffersCard from './CarOffersCard';
import {
  CarSlider,
  Search,
  FilterSideBar,
  CarsPerPage,
  SortingCars,
} from './index';
import {
  AlignItem1,
  AlignItem2,
  AlignItem3,
  AlignItem4,
} from '../utils/AlignmentIcons/index';
import ReactPaginate from 'react-paginate';
import LoadingSvg from '../utils/LoadingSvg';
import Button from '../utils/Button';
import { carsReducer } from '../utils/CarsReducer';
import { useAPI } from '../utils/CarsContext';
import './CarOffers.css';

const initialState = 'mka__default-layout-right__sidebar';

const CarOffers = () => {
  const { array, loader } = useAPI();
  const [isLoading] = loader;
  const [sliderValues, setSliderValues] = useState([2900, 24990]);
  const [selectedCarSortingMethod, setSelectedCarSortingMethod] = useState('');
  const [isActive, setIsActive] = useState(initialState);
  const [carsPerPage, setCarsPerPage] = useState(12);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [INITIAL_STATE, dispatch] = useReducer(carsReducer);

  const handleSliderChange = priceArray => {
    setSliderValues(priceArray);
  };

  const handleMakeChange = select => {
    dispatch({ type: 'CHANGE_MAKE', select });
  };

  const handleModelChange = select => {
    dispatch({ type: 'CHANGE_MODEL', select });
  };

  const handleYearChange = select => {
    dispatch({ type: 'CHANGE_YEAR', select });
  };

  const handleMileageChange = select => {
    dispatch({ type: 'CHANGE_MILEAGE', select });
  };

  const handleFuelChange = select => {
    dispatch({ type: 'CHANGE_FUEL', select });
  };

  const handleTransmissionChange = select => {
    dispatch({ type: 'CHANGE_TRANSMISSION', select });
  };

  const handleDriveTrainChange = select => {
    dispatch({ type: 'CHANGE_DRIVETRAIN', select });
  };

  const handleCarsPerPageChange = select => {
    setCarsPerPage(select.value);
  };

  const handleSelectedCarSortingMethod = select => {
    setSelectedCarSortingMethod(select.value);
  };

  const handlePageClick = e => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const toggleClassView2 = () => {
    const view2 = 'mka__default-layout-left__sidebar';
    setIsActive(view2);
  };

  const toggleClassView3 = () => {
    const view3 = 'mka__full-width-layout-right__sidebar';
    setIsActive(view3);
  };

  const toggleClassView4 = () => {
    const view_4 = 'mka__full-width-layout-left__sidebar';
    setIsActive(view_4);
  };

  return (
    <div className='mka__wrapper car-offers'>
      <div className='mka__container'>
        <div className='mka__content-car-offers'>
          <div className={`mka__content-car-offers__main-grid ${isActive}`}>
            <div className='mka__filters-and-views'>
              <CarSlider
                handleSliderChange={handleSliderChange}
                sliderValues={sliderValues}
              />
              <div className='mka-responsive-item'>
                <div className='mka-sorting-div__offers'>
                  <CarsPerPage
                    handleCarsPerPageChange={handleCarsPerPageChange}
                  />
                  <SortingCars
                    handleSelectedCarSortingMethod={
                      handleSelectedCarSortingMethod
                    }
                  />
                </div>
                <div className='mka__icons-container'>
                  {/* Preorganizovati ikone u komponente */}
                  <span
                    className='mka__individual-icon'
                    onClick={() => setIsActive(initialState)}
                  >
                    <i>
                      <AlignItem1 isActive={isActive} />
                    </i>
                  </span>
                  <span
                    className='mka__individual-icon'
                    onClick={toggleClassView2}
                  >
                    <i>
                      <AlignItem2 isActive={isActive} />
                    </i>
                  </span>
                  <span
                    className='mka__individual-icon'
                    onClick={toggleClassView3}
                  >
                    <i>
                      <AlignItem3 isActive={isActive} />
                    </i>
                  </span>
                  <span
                    className='mka__individual-icon'
                    onClick={toggleClassView4}
                  >
                    <i>
                      <AlignItem4 isActive={isActive} />
                    </i>
                  </span>
                </div>
              </div>
            </div>
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
            <div className='mka__list-of-cars'>
              {isLoading ? (
                <LoadingSvg />
              ) : (
                <>
                  {array.map(car => (
                    <CarOffersCard
                      key={car.id}
                      car={car}
                      isActive={isActive}
                      initialState={initialState}
                    />
                  ))}
                </>
              )}
              <ReactPaginate
                previousLabel={'← Vorherige'}
                nextLabel={'Weiter →'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active-pagination'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarOffers;
