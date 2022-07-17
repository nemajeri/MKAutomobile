import React from 'react'
import './FilterSideBar.css'
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


const FilterSideBar = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
    return (
            <>
<Select options={options} styles={colourStyles} isSearchable={false}/>
            </>
        )
    }

export default FilterSideBar