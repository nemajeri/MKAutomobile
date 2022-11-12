import React, { useState } from 'react';
import CarOffersCard from './CarOffersCard';
import { TopBarWithFilters, SideBar } from './index';
import ReactPaginate from 'react-paginate';
import LoadingSvg from '../utils/LoadingSvg';
import { useAPI } from '../utils/CarsContext';
import './CarOffers.css';

const initiallCarAttributes = {
  make: null,
  model: null,
  year: null,
  mileage: null,
  fuel: null,
  transmission: null,
  driveTrain: null,
};

const initialState = 'mka__default-layout-right__sidebar';

const CarOffers = () => {
  const [isActive, setIsActive] = useState(initialState);
  const { array, loader } = useAPI();
  const [isLoading] = loader;
  const [state, setState] = useState(initiallCarAttributes);
  const [sliderValues, setSliderValues] = useState([2900, 24990]);
  const [selectedCarSortingMethod, setSelectedCarSortingMethod] = useState('');
  const [carsPerPage, setCarsPerPage] = useState(12);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleSliderChange = priceArray => {
    setSliderValues(priceArray);
  };

  const onChangeValue = field => select => {
    setState({ [field]: select.value });
  };
  const handleMakeChange = onChangeValue('make');
  const handleModelChange = onChangeValue('model');
  const handleYearChange = onChangeValue('year');
  const handleMileageChange = onChangeValue('mileage');
  const handleFuelChange = onChangeValue('fuel');
  const handleTransmissionChange = onChangeValue('transmission');
  const handleDriveTrainChange = onChangeValue('driveTrain');

  const handleCarsPerPageChange = select => {
    setCarsPerPage(select.value);
  };

  const handleSelectedCarSortingMethod = select => {
    setSelectedCarSortingMethod(select.value);
  };

  const toggleClass = view => e => {
    setIsActive(view);
  };

  const view2 = 'mka__default-layout-left__sidebar';
  const view3 = 'mka__full-width-layout-right__sidebar';
  const view4 = 'mka__full-width-layout-left__sidebar';

  const toggleDefaultLeftSidebarLayout = toggleClass(view2);
  const toggleFullWidthRightSidebarLayout = toggleClass(view3);
  const toggleFullWidthLeftSidebarLayout = toggleClass(view4);

  const handlePageClick = e => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  return (
    <div className='mka__wrapper car-offers'>
      <div className='mka__container'>
        <div className='mka__content-car-offers'>
          <div className={`mka__content-car-offers__main-grid ${isActive}`}>
            <TopBarWithFilters
              handleSliderChange={handleSliderChange}
              sliderValues={sliderValues}
              handleCarsPerPageChange={handleCarsPerPageChange}
              handleSelectedCarSortingMethod={handleSelectedCarSortingMethod}
              setIsActive={setIsActive}
              initialState={initialState}
              isActive={isActive}
              toggleDefaultLeftSidebarLayout={toggleDefaultLeftSidebarLayout}
              toggleFullWidthRightSidebarLayout={
                toggleFullWidthRightSidebarLayout
              }
              toggleFullWidthLeftSidebarLayout={
                toggleFullWidthLeftSidebarLayout
              }
            />
            <SideBar
              array={array}
              handleMakeChange={handleMakeChange}
              handleModelChange={handleModelChange}
              handleYearChange={handleYearChange}
              handleMileageChange={handleMileageChange}
              handleFuelChange={handleFuelChange}
              handleTransmissionChange={handleTransmissionChange}
              handleDriveTrainChange={handleDriveTrainChange}
            />
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
