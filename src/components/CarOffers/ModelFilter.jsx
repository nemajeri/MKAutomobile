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


const ModelFilter = ({carsList, handleModelChange}) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
  }
  
  const options = carsList
    .map((car) => {
      return {
        value: car.model,
        label: car.model
      };
    })
   
   const distinctOptions = distinctBy(options, car => car.value)


    return (
            <>
<Select   
components={{ IndicatorSeparator:() => null }}
placeholder='Model'
className='select-placeholder'
styles={colourStyles} 
options={distinctOptions} 
onChange={handleModelChange} 
isSearchable={false}/>

            </>
        )
    }

export default ModelFilter