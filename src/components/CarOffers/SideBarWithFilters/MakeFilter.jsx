import React from 'react';
import Select from 'react-select';

const MakeFilter = ({ carsList, handleMakeChange, colourStyles }) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };

  const options = carsList.map(car => {
    return {
      value: car.make,
      label: car.make,
    };
  });

  const distinctOptions = distinctBy(options, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Marke'
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
        onChange={handleMakeChange}
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

export default MakeFilter;