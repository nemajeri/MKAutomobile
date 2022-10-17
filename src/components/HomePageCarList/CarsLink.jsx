import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const CarsLink = () => {
  return (
    <div className='mka__shortcut-home-list'>
      <IconContext.Provider
        value={{
          className: 'mka__icon-size',
        }}
      >
        <a href='/fahrzeugangebote'>
          <i>
            <FaCarAlt />
          </i>
        </a>
      </IconContext.Provider>
      <a href='/fahrzeugangebote'>FAHRZEUGANGEBOTE</a>
    </div>
  );
};

export default CarsLink;
