import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const CarPurchaseLink = () => {
  return (
    <div className='mka__shortcut-home-list'>
      <IconContext.Provider value={{ className: 'mka__icon-size' }}>
        <a href='/fahrzeugankauf'>
          <i>
            <FaWallet />
          </i>
        </a>
      </IconContext.Provider>
      <a href='/fahrzeugankauf'>FAHRZEUGANKAUF</a>
    </div>
  );
};

export default CarPurchaseLink;
