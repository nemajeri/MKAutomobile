import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const MileageFilter = ({
  filteredCarsList,
  handleMileageChange,
  colourStyles,
  isResetting,
  setIsResetting,
  state
}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  };

  useEffect(() => {
    if (isResetting) {
      setSelectedValue(null);
      setIsResetting(false)
    }
  }, [isResetting, setIsResetting]);

  const options = filteredCarsList.map((car) => {
    return {
      value: car.mileage,
      label: car.mileage,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleMileageChange(selectedOption);
  };

  const distinctOptions = distinctBy(options, (car) => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Kilometer'
        className='select-placeholder'
        styles={colourStyles}
        isDisabled={!state.year}
        options={distinctOptions}
        value={selectedValue}
        onChange={handleSelectChange}
        isSearchable={false}
        theme={(theme) => ({
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

export default MileageFilter;
