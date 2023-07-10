import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const ModelFilter = ({
  filteredCarsList,
  handleModelChange,
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
      value: car.model,
      label: car.model,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleModelChange(selectedOption);
  };

  const distinctOptions = distinctBy(options, (car) => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Model'
        className='select-placeholder'
        styles={colourStyles}
        value={selectedValue}
        options={distinctOptions}
        onChange={handleSelectChange}
        isDisabled={!state.make}
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

export default ModelFilter;
