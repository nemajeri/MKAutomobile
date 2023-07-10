import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { cars } from '../../utils/cars';

const MakeFilter = ({ handleMakeChange, colourStyles, isResetting, setIsResetting }) => {
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

  const options = cars.map((car) => {
    return {
      value: car.make,
      label: car.make,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleMakeChange(selectedOption);
  };

  const distinctOptions = distinctBy(options, (car) => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Marke'
        value={selectedValue}
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
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

export default MakeFilter;
