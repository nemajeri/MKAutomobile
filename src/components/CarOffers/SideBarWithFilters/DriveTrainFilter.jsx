import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const DriveTrainFilter = ({
  filteredCarsList,
  handleDriveTrainChange,
  colourStyles,
  isResetting,
  setIsResetting,
  carFilteringAttributes,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  };

  useEffect(() => {
    if (isResetting) {
      setSelectedValue(null);
      setIsResetting(false);
    }
  }, [isResetting, setIsResetting]);

  const options = filteredCarsList.map((car) => {
    return {
      value: car.drivetrain,
      label: car.drivetrain,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    handleDriveTrainChange(selectedOption);
  };

  const distinctOptions = distinctBy(options, (car) => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Antrieb'
        className='select-placeholder'
        styles={colourStyles}
        isDisabled={!carFilteringAttributes.make}
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

export default DriveTrainFilter;
