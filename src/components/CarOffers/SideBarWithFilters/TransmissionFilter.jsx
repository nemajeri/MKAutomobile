import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const TransmissionFilter = ({
  filteredCarsList,
  handleTransmissionChange,
  colourStyles,
  isResetting,
  setIsResetting,
  state
}) => {
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
      value: car.transmission,
      label: car.transmission,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleTransmissionChange(selectedOption);
  };

  const distinctOptions = distinctBy(options, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Getriebart'
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
        isDisabled={!state.fuel}
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

export default TransmissionFilter;
