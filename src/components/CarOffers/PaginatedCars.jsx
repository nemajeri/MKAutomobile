import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import LoadingSvg from '../utils/LoadingSvg';
import ListedCars from './ListedCars';

const PaginatedCars = ({
  isLoading,
  isActive,
  initialState,
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
    <div className='mka__list-of-cars'>
      {isLoading ? (
        <LoadingSvg />
      ) : (
        <ListedCars
          isActive={isActive}
          initialState={initialState}
          currentCars={currentCars}
        />
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
  );
};

export default PaginatedCars;
