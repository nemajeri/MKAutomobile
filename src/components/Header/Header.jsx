import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaMobileAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className='mka__header-wrappper'>
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
              <FaRegEnvelope />
              <a href='mailto:office@mkautomobile.at'>office@mkautomobile.at</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
