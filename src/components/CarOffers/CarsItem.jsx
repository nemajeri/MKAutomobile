import React from 'react';
import DefaultCardWidth from './Layouts/DefaultCardWidth';
import FullCardWidth from './Layouts/FullCardWidth';


const CarsItem = ({car, isActive}) => {
    return (
      <>
      { isActive === "mka__full-width-layout-right__sidebar" || isActive === "mka__full-width-layout-left__sidebar" 
      ? <FullCardWidth car = {car}/>
      : <DefaultCardWidth car = {car}/>}
    </>
    )
  }

export default CarsItem