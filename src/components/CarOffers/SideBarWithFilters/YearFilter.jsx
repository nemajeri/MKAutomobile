import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const YearFilter = ({ filteredCarsList, handleYearChange, colourStyles, isResetting, setIsResetting, carFilteringAttributes }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };
  const sortBy = (arr, f) => arr.sort((a, b) => f(b) - f(a));

  useEffect(() => {
    if (isResetting) {
      setSelectedValue(null);
      setIsResetting(false)
    }
  }, [isResetting, setIsResetting]);

  const options = filteredCarsList.map(car => {
    return {
      value: car.year,
      label: car.year,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleYearChange(selectedOption);
  };

  const distinctOptions = distinctBy(options, car => car.value);
  const sortedOptions = sortBy(distinctOptions, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Erstzulassung'
        className='select-placeholder'
        styles={colourStyles}
        isDisabled={!carFilteringAttributes.make}
        options={sortedOptions}
        value={selectedValue}
        onChange={handleSelectChange}
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
