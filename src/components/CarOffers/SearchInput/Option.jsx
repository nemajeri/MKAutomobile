import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({ car: { link, id, label } }) => {
  return (
    <Link to={`/fahrzeugdaten/${id}`}>
      <div className='mka__individual-car-option'>
        {link && (
          <img src={require(`../../../assets/${link}`)} alt='searched-cars' />
        )}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default Option;
