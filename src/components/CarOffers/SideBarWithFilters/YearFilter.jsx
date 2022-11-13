import React from 'react';
import Select from 'react-select';

const YearFilter = ({ filteredCarsList, handleYearChange, colourStyles }) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };
  const sortBy = (arr, f) => arr.sort((a, b) => f(b) - f(a));

  const options = filteredCarsList.map(car => {
    return {
      value: car.year,
      label: car.year,
    };
  });

  const distinctOptions = distinctBy(options, car => car.value);
  const sortedOptions = sortBy(distinctOptions, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Erstzulassung'
        className='select-placeholder'
        styles={colourStyles}
        options={sortedOptions}
        onChange={handleYearChange}
        isSearchable={false}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'grey',
            primary: 'grey',
          },
        })}
      />
    </>
  );
};

export default YearFilter;
