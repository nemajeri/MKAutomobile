import './Header.css';
import { FaPhoneAlt, FaRegEnvelope, FaMobileAlt } from 'react-icons/fa';
import React from 'react';

const Header = () => {
  return (
    <div className='mka__div'>
      <div className='mka__container'>
        <div className='mka__header'>
          <div className='mka__header-list'>
            <ul>
              <li>
                <FaPhoneAlt className='mka__icons' /> +43 2262 20413
              </li>
              <li>
                <FaMobileAlt className='mka__icons' /> +43 680 3149332
              </li>
            </ul>
          </div>
          <div className='mka__header-link'>
            <p>
              <FaRegEnvelope />{' '}
              <a href='mailto:office@mkautomobile.at'>office@mkautomobile.at</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
