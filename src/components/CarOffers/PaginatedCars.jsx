import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import LoadingSvg from '../utils/LoadingSvg';
import DefaultCardWidth from './Layouts/DefaultCardWidth';
import FullCardWidth from './Layouts/FullCardWidth';

const PaginatedCars = ({
  isLoading,
  isActive,
  filteredCarsList,
  carsPerPage,
}) => {
  const [carsOffset, setCarsOffset] = useState(0);
  const endOffset = carsOffset + carsPerPage;

  const currentCars = filteredCarsList.slice(carsOffset, endOffset);
  const pageCount = Math.ceil(filteredCarsList.length / carsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * carsPerPage) % filteredCarsList.length;
    setCarsOffset(newOffset);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSvg />
      ) : (
        <>
          {isActive === 'mka__full-width-layout-right__sidebar' ||
          isActive === 'mka__full-width-layout-left__sidebar' ? (
            <div className='mka__list-of-cars_fullwidth'>
              {filteredCarsList.map(car => (
                <FullCardWidth car={car} />
              ))}
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
          ) : (
            <div className='mka__list-of-cars'>
              {filteredCarsList.map(car => (
                <DefaultCardWidth car={car} />
              ))}
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
          )}
        </>
      )}
    </>
  );
};

export default PaginatedCars;
