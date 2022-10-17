import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const FinancePageLink = () => {
  return (
    <div className='mka__shortcut-home-list'>
      <IconContext.Provider value={{ className: 'mka__icon-size' }}>
        <a href='/finanzierung'>
          <i>
            <FaStar />
          </i>
        </a>
      </IconContext.Provider>
      <a href='/finanzierung'>FINANZIERUNG</a>
    </div>
  );
};

export default FinancePageLink;
