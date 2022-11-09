import React, { useState, useEffect, useReducer } from 'react';
import CarsItem from './CarsItem';
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
import { carsReducer, INITIAL_STATE } from '../utils/CarsReducer';
import './CarOffers.css';

const initialState = 'view_1';

const CarOffers = () => {
  const [state, dispatch] = useReducer(carsReducer, INITIAL_STATE);
  const [carsList, setCarsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMileage, setSelectedMileage] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedTransmission, setSelectedTransmission] = useState(null);
  const [selectedDriveTrain, setSelectedDriveTrain] = useState(null);
  const [filteredCarsList, setFilteredCarsList] = useState([]);
  const [sliderValues, setSliderValues] = useState([2900, 24990]);
  const [selectedCarSortingMethod, setSelectedCarSortingMethod] = useState('');
  const [isActive, setIsActive] = useState(initialState);
  const [carsPerPage, setCarsPerPage] = useState(12);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_MY_API_KEY);
        const data = await response.json();
        const minPrice = Math.min(...data.map(car => car.price));
        const maxPrice = Math.max(...data.map(car => car.price));
        const priceArray = [minPrice, maxPrice];
        setPageCount(Math.ceil(data.length / carsPerPage));
        const slice = data.slice(offset - 1, offset - 1 + carsPerPage);
        setCarsList(slice);
        setFilteredCarsList(slice);
        setSliderValues(priceArray);
        setLoading(false);
      } catch {
        alert('An error occured during fetching');
        setLoading(false);
      }
    };
    fetchCars();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line
  }, [
    selectedMake,
    selectedModel,
    selectedYear,
    selectedMileage,
    selectedFuel,
    selectedTransmission,
    selectedDriveTrain,
    sliderValues,
    selectedCarSortingMethod,
  ]);

  const applyFilters = () => {
    let filteredCarsList = carsList;

    if (selectedMake) {
      filteredCarsList = carsList.filter(car => car.make === selectedMake);
    }

    if (selectedModel) {
      filteredCarsList = carsList.filter(car => car.model === selectedModel);
    }

    if (selectedYear) {
      filteredCarsList = carsList.filter(car => car.year === selectedYear);
    }

    if (selectedMileage) {
      filteredCarsList = carsList.filter(
        car => car.mileage === selectedMileage
      );
    }

    if (selectedFuel) {
      filteredCarsList = carsList.filter(car => car.fuel === selectedFuel);
    }

    if (selectedTransmission) {
      filteredCarsList = carsList.filter(
        car => car.transmission === selectedTransmission
      );
    }

    if (selectedDriveTrain) {
      filteredCarsList = carsList.filter(
        car => car.drivetrain === selectedDriveTrain
      );
    }

    if (selectedCarSortingMethod === 'Sortieren nach Preis') {
      filteredCarsList = carsList.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
    } else if (selectedCarSortingMethod === 'Sortieren nach Jahr') {
      filteredCarsList = carsList.sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
      );
    }

    const minPrice = sliderValues[0];
    const maxPrice = sliderValues[1];

    if (sliderValues) {
      filteredCarsList = carsList.filter(
        car => minPrice < car.price && maxPrice > car.price
      );
    }

    setFilteredCarsList(filteredCarsList);
  };

  const handleSliderChange = priceArray => {
    setSliderValues(priceArray);
  };

  const handleMakeChange = select => {
    setSelectedMake(select.value);
  };

  const handleModelChange = select => {
    setSelectedModel(select.value);
  };

  const handleYearChange = select => {
    setSelectedYear(select.value);
  };

  const handleFuelChange = select => {
    setSelectedFuel(select.value);
  };

  const handleTransmissionChange = select => {
    setSelectedTransmission(select.value);
  };

  const handleDriveTrainChange = select => {
    setSelectedDriveTrain(select.value);
  };

  const handleMileageChange = select => {
    setSelectedMileage(select.value);
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
    const view2 = 'view_2';
    setIsActive(view2);
  };

  const toggleClassView3 = () => {
    const view3 = 'view_3';
    setIsActive(view3);
  };

  const toggleClassView4 = () => {
    const view_4 = 'view_4';
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
                <div className='mka__div-icon'>
                  <span
                    className='mka__span-icon'
                    onClick={() => setIsActive(initialState)}
                  >
                    <i>
                      <AlignItem1 isActive={isActive} />
                    </i>
                  </span>
                  <span className='mka__span-icon' onClick={toggleClassView2}>
                    <i>
                      <AlignItem2 isActive={isActive} />
                    </i>
                  </span>
                  <span className='mka__span-icon' onClick={toggleClassView3}>
                    <i>
                      <AlignItem3 isActive={isActive} />
                    </i>
                  </span>
                  <span className='mka__span-icon' onClick={toggleClassView4}>
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
                <Search carsList={carsList} />
              </div>
              <div className='mka__sidebar-detailed-search'>
                <h6>DETAILSUCHE</h6>
                <div className='mka__sidebar-divider'></div>
                <FilterSideBar
                  carsList={carsList}
                  filteredCarsList={filteredCarsList}
                  handleMakeChange={handleMakeChange}
                  handleModelChange={handleModelChange}
                  handleYearChange={handleYearChange}
                  handleMileageChange={handleMileageChange}
                  handleFuelChange={handleFuelChange}
                  handleTransmissionChange={handleTransmissionChange}
                  handleDriveTrainChange={handleDriveTrainChange}
                />
                <button
                  onClick={() => setFilteredCarsList(carsList)}
                  className='btn shorter left-alignment'
                >
                  <svg
                    width='180px'
                    height='60px'
                    viewBox='0 0 180 60'
                    className='border'
                  >
                    <polyline
                      points='179,1 179,59 1,59 1,1 179,1'
                      className='bg-line'
                    />
                    <polyline
                      points='179,1 179,59 1,59 1,1 179,1'
                      className='hl-line'
                    />
                  </svg>
                  <span id='btn-txt'>Zurucksetzen</span>
                </button>
              </div>
            </div>
            <div className='mka__list-of-cars'>
              {loading === true ? (
                <div className='mka__loading-svg-positioning'>
                  <LoadingSvg />
                </div>
              ) : (
                <div
                  className={
                    isActive === initialState || isActive === 'view_2'
                      ? 'mka__cars-grid'
                      : 'mka__cars-flex'
                  }
                >
                  {filteredCarsList.map(car => (
                    <CarsItem key={car.id} car={car} isActive={isActive} />
                  ))}
                </div>
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
