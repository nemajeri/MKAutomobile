import React from 'react'
import './FilterSideBar.css'
import Select from 'react-select';

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "#0a0b0d" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "green",
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
<Select options={options} styles={colourStyles} />
            </>
        )
    }

export default FilterSideBar