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
<Select   options={distinctOptions} 
          onChange={handleModelChange} 
          isSearchable={false}/>

            </>
        )
    }

export default ModelFilter