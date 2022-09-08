import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CarsItem from './CarsItem';

const Items = ({ filteredCarsList }) => {
  return (
    <>
      {filteredCarsList  &&
        filteredCarsList.map(car => (
        <CarsItem key={car.id} car={car}/>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, filteredCarsList }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // eslint-disable-next-line
    setCurrentItems(filteredCarsList.slice(itemOffset, endOffset));
        // eslint-disable-next-line
    setPageCount(Math.ceil(filteredCarsList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
        // eslint-disable-next-line
    const newOffset = (event.selected * itemsPerPage) % filteredCarsList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination