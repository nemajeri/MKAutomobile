import React from 'react';
import DefaultCardWidth from './Layouts/DefaultCardWidth';
import FullCardWidth from './Layouts/FullCardWidth';


const CarsItem = ({car, isActive}) => {
    return (
      <>
      { isActive === "view_3" || isActive === "view_4" 
      ? <FullCardWidth car = {car}/>
      : <DefaultCardWidth car = {car}/>}
    </>
    )
  }

export default CarsItem