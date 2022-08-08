import React from 'react'
import Select from 'react-select';

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "transparent" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "transparent" : "grey" ,
      color: "#FFF",
      cursor: isDisabled ? "not-allowed" : "default"
    };
  }
};


const YearFilter = ({carsList, handleYearChange}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  }
  const sortBy = (arr, f) => arr.sort((a, b) => f(b) - f(a));
  
  const options = carsList
    .map((car) => {
      return {
        value: car.year,
        label: car.year
      };
    })
   
   const distinctOptions = distinctBy(options, car => car.value)
   const sortedOptions = sortBy(distinctOptions, car => car.value)


    return (
            <>
<Select   options={sortedOptions} 
          onChange={handleYearChange} 
          isSearchable={false}/>

            </>
        )
    }

export default YearFilter