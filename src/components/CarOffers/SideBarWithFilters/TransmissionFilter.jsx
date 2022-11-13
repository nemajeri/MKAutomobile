import React from 'react';
import Select from 'react-select';

const TransmissionFilter = ({
  filteredCarsList,
  handleTransmissionChange,
  colourStyles,
}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };

  const options = filteredCarsList.map(car => {
    return {
      value: car.transmission,
      label: car.transmission,
    };
  });

  const distinctOptions = distinctBy(options, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Getriebart'
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
        onChange={handleTransmissionChange}
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
