import React from 'react'
import Select from 'react-select';

const colourStyles = {
  control: (styles) => (
    { ...styles, 
    backgroundColor: "transparent",
    borderRadius: "0px",
    marginBottom: "10px"
  }
    ),
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "grey"
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "black"
    }
  }
};


const MileageFilter = ({carsList, handleMileageChange}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  }
  
  const options = carsList
    .map((car) => {
      return {
        value: car.mileage,
        label: car.mileage
      };
    })
   
   const distinctOptions = distinctBy(options, car => car.value)


    return (
            <>
<Select   
components={{ IndicatorSeparator:() => null }}
placeholder='Kilometer'
className='select-placeholder'
styles={colourStyles} 
options={distinctOptions} 
onChange={handleMileageChange} 
isSearchable={false}/>

            </>
        )
    }

export default MileageFilter