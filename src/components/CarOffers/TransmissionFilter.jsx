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


const TransmissionFilter = ({carsList, handleTransmissionChange}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  }
  
  const options = carsList
    .map((car) => {
      return {
        value: car.transmission,
        label: car.transmission
      };
    })
   
   const distinctOptions = distinctBy(options, car => car.value)


    return (
            <>
<Select  
components={{ IndicatorSeparator:() => null }}
placeholder='Getriebart'
className='select-placeholder'
styles={colourStyles} 
options={distinctOptions} 
onChange={handleTransmissionChange} 
isSearchable={false}/>
            </>
        )
    }

export default TransmissionFilter