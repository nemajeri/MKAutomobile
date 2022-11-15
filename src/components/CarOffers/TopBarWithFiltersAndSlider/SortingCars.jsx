import React from 'react';
import Select from 'react-select';

const SortingCars = ({ handleSelectedCarSortingMethod, colourStyles }) => {
  const options = [
    { value: 'Sortieren nach Preis', label: 'Sortieren nach Preis' },
    { value: 'Sortieren nach Jahr', label: 'Sortieren nach Jahr' },
  ];

  return (
    <div className='mka__sorting-alignment'>
      <Select
        components={{ IndicatorSeparator: () => null }}
        options={options}
        className='select-placeholder'
        styles={colourStyles}
        placeholder='Sortieren von Daten'
        isSearchable={false}
        onChange={handleSelectedCarSortingMethod}
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
    </div>
  );
};

export default SortingCars;
