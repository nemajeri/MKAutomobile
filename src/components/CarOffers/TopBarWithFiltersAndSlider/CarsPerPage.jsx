import React from 'react';
import Select from 'react-select';

const CarsPerPage = ({ handleCarsPerPageChange, colourStyles }) => {
  const options = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '48', label: '48' },
  ];

  return (
    <div className='mka__sorting-alignment'>
      <Select
        options={options}
        components={{ IndicatorSeparator: () => null }}
        styles={colourStyles}
        className='select-placeholder'
        placeholder='12'
        defaultValue={options[0]}
        isSearchable={false}
        onChange={handleCarsPerPageChange}
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
    </div>
  );
};

export default CarsPerPage;
