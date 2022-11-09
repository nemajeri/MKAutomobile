import React from 'react';
import Select from 'react-select';

const DriveTrainFilter = ({
  filteredCarsList,
  handleDriveTrainChange,
  colourStyles,
}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };

  const options = filteredCarsList.map(car => {
    return {
      value: car.drivetrain,
      label: car.drivetrain,
    };
  });

  const distinctOptions = distinctBy(options, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Antrieb'
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
        onChange={handleDriveTrainChange}
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

export default DriveTrainFilter;
