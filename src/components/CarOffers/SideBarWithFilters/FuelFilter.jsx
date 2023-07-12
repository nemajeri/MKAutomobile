import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const FuelFilter = ({ filteredCarsList, handleFuelChange, colourStyles, isResetting, setIsResetting, carFilteringAttributes }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };

  useEffect(() => {
    if (isResetting) {
      setSelectedValue(null);
      setIsResetting(false)
    }
  }, [isResetting, setIsResetting]);

  const options = filteredCarsList.map(car => {
    return {
      value: car.fuel,
      label: car.fuel,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleFuelChange(selectedOption);
  };


  const distinctOptions = distinctBy(options, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Treibstoff'
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
        onChange={handleSelectChange}
        isSearchable={false}
        value={selectedValue}
        isDisabled={!carFilteringAttributes.make}
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

export default FuelFilter;
