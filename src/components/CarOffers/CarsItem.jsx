import React, { Fragment } from 'react';
import View1 from './Views/View1';
import View2 from './Views/View2';


const CarsItem = ({car, isActive}) => {
    return (
      <Fragment>
      { isActive === "view_3" || isActive === "view_4" 
      ? <View2 car = {car}/>
      : <View1 car = {car}/>}
    </Fragment>
    )
  }

export default CarsItem