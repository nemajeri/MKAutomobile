import React from 'react'
import AlignItem1 from './AlignItem1'
import { AlignItem2 } from './AlignItem2'
import { AlignItem3 } from './AlignItem3'
import { AlignItem4 } from './AlignItem4'
import './CarAlignment.css'

 const CarAlignment = () => {
    return (
      <div className='mka__div-icon1'>
            <span className='mka__span-icon1'>
            <i className='mka__i-icon1'>
                <AlignItem1 className={'mka__i-icon-color'}/>
                </i>
                </span>
                <span className='mka__span-icon1'>
            <i className='mka__i-icon1'>
                <AlignItem2 />
                </i>
                </span>
                <span className='mka__span-icon1'>
            <i className='mka__i-icon1'>
                <AlignItem3 />
                </i>
                </span>
                <span className='mka__span-icon1'>
            <i className='mka__i-icon1'>
                <AlignItem4 />
                </i>
                </span>

      </div>
    )
}

export default CarAlignment