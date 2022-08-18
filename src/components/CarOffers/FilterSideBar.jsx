import React from 'react'
import './FilterSideBar.css'
import MakeFilter from './MakeFilter';
import ModelFilter from './ModelFilter'
import YearFilter from './YearFilter'
import MileageFilter from './MileageFilter';
import TransmissionFilter from './TransmissionFilter';
import FuelFilter from './FuelFilter'
import DriveTrainFilter from './DriveTrainFilter'


const FilterSideBar = ({carsList, handleMakeChange, handleModelChange, handleYearChange, handleMileageChange, handleFuelChange, handleTransmissionChange, handleDriveTrainChange}) => {
    return (
            <>
<MakeFilter carsList={carsList} 
            handleMakeChange={handleMakeChange} />
<ModelFilter carsList={carsList} 
            handleModelChange={handleModelChange} />
<YearFilter carsList={carsList} 
            handleYearChange={handleYearChange} />
<MileageFilter carsList={carsList} 
            handleMileageChange={handleMileageChange} />
<FuelFilter carsList={carsList} 
            handleFuelChange={handleFuelChange} />
<TransmissionFilter carsList={carsList} 
            handleTransmissionChange={handleTransmissionChange} />
<DriveTrainFilter carsList={carsList} 
            handleDriveTrainChange={handleDriveTrainChange} />                                    
            </>
        )
    }

export default FilterSideBar