import React from 'react'
import './FilterSideBar.css'
import MakeFilter from './MakeFilter';


const FilterSideBar = ({carsList, handleChange, selectMake}) => {
    return (
            <>
<MakeFilter carsList={carsList} 
            handleChange={handleChange} 
            selectMake={selectMake}/>
            </>
        )
    }

export default FilterSideBar