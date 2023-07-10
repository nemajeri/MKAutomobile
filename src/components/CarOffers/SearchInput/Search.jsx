import React from 'react';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Search.css';

import { cars } from '../../utils/cars';

const Search = () => {

  const carsOptions = cars?.map((car) => {
    return {
      value: car.title,
      label: car.title,
      id: car.id,
      link: car.link,
    };
  });

  const customStyles = {
    option: (provided) => ({
      ...provided,
      padding: 20,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
        color: 'red',
      },
      color: 'grey',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: state.isFocused ? '1px solid red' : '1px solid white',
      padding: 8,
      paddingLeft: 20,
    }),
    control: () => ({
      width: 'auto',
    }),
  };

  return (
    <>
      <Select
        className='mka__search-placeholder'
        cacheOptions
        placeholder='Suche...'
        options={carsOptions}
        styles={customStyles}
        defaultOptions
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'red',
            primary: 'red',
          },
        })}
        components={{
          DropdownIndicator: () => <FaSearch className='mka__search-icon' />,
          IndicatorSeparator: () => null,
        }}
        formatOptionLabel={(car) => (
          <div className='mka__individual-car-option'>
            {car.link && (
              <img
                src={require(`../../../assets/${car.link}`)}
                alt='searched-cars'
              />
            )}
            <Link to={`/fahrzeugdaten/${car.id}`}>
              <span>{car.label}</span>
            </Link>
          </div>
        )}
      />
    </>
  );
};

export default Search;
