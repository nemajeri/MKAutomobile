import React from 'react'
import './FilterSideBar.css'
import MakeFilter from './MakeFilter';
import ModelFilter from './ModelFilter'
import YearFilter from './YearFilter'
import MileageFilter from './MileageFilter';


const FilterSideBar = ({carsList, handleMakeChange, handleModelChange, handleYearChange, handleModelMileage}) => {
    return (
            <>
<MakeFilter carsList={carsList} 
            handleMakeChange={handleMakeChange} />
<ModelFilter carsList={carsList} 
            handleModelChange={handleModelChange} />
<YearFilter carsList={carsList} 
            handleYearChange={handleYearChange} />
<MileageFilter carsList={carsList} 
            handleModelChange={handleYearChange} />
            </>
        )
    }

export default FilterSideBar