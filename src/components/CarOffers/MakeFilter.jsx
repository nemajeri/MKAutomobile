import React from 'react'
import Select from 'react-select';


const colourStyles = {
  control: (styles, {isSelected}) => (
    { ...styles, 
    borderColor: isSelected ? "red" : "grey",  
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


const MakeFilter = ({carsList, handleMakeChange}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  }
  
  const options = carsList
    .map((car) => {
      return {
        value: car.make,
        label: car.make
      };
    })
   
   const distinctOptions = distinctBy(options, car => car.value)


    return (
            <>
<Select  
components={{ IndicatorSeparator:() => null }}
placeholder='Marke'
className='select-placeholder'
styles={colourStyles} 
options={distinctOptions} 
onChange={handleMakeChange} 
isSearchable={false}/>
            </>
        )
    }

export default MakeFilter