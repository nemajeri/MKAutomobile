import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import LoadingSvg from '../utils/LoadingSvg';
import DefaultCardWidth from './Layouts/DefaultCardWidth';
import FullCardWidth from './Layouts/FullCardWidth';

const PaginatedCars = ({
  isLoading,
  isActiveClass,
  filteredCarsList,
  carsPerPage,
}) => {
  const [carsOffset, setCarsOffset] = useState(0);
  const endOffset = carsOffset + carsPerPage;

  const currentCars = filteredCarsList?.slice(carsOffset, endOffset);
  const pageCount = Math.ceil(filteredCarsList?.length / carsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * carsPerPage) % filteredCarsList.length;
    setCarsOffset(newOffset);
  };

  let keyIncrement = 0;

  const carCardComponent = (car) => {
    if (
      isActiveClass === 'mka__full-width-layout-right__sidebar' ||
      isActiveClass === 'mka__full-width-layout-left__sidebar'
    ) {
      return <FullCardWidth key={keyIncrement++} car={car} />;
    } else {
      return <DefaultCardWidth key={keyIncrement++} car={car} />;
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSvg />
      ) : (
        <div className='main'>
          {filteredCarsList.length === 0 ? (
            <div className='mka__full-width-no-carsfound__container'>
              <h1>Kein fahrzeug gefunden</h1>
            </div>
          ) : (
            <>
              <div
                className={
                  isActiveClass === 'mka__full-width-layout-right__sidebar' ||
                  isActiveClass === 'mka__full-width-layout-left__sidebar'
                    ? 'mka__list-of-cars_fullwidth'
                    : 'mka__list-of-cars'
                }
              >
                {currentCars.map((car) => carCardComponent(car))}
              </div>
              <ReactPaginate
                previousLabel={'← Vorherige'}
                nextLabel={'Weiter →'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active-pagination'}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PaginatedCars;
