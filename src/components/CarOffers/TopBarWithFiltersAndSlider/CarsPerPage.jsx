import React from 'react';
import Select from 'react-select';

const CarsPerPage = ({ handleCarsPerPageChange, colourStyles, setSelectedValue, selectedValue }) => {
  const options = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '48', label: '48' },
  ];

  const handleChange = (value) => {
    setSelectedValue(value);
    handleCarsPerPageChange(value);
  };

  return (
    <div className='mka__sorting-alignment'>
      <Select
        options={options}
        components={{ IndicatorSeparator: () => null }}
        styles={colourStyles}
        className='select-placeholder'
        placeholder='12'
        value={selectedValue}
        isSearchable={false}
        onChange={handleChange}
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
