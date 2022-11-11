import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mka__div-footer'>
      <div className='mka__container'>
        <div className='mka__footer'>
          <div className='mka__footer-links'>
            <Link to='/datenschutz'>DATENSCHUTZ</Link>
            <Link to='/impressum'>IMPRESSUM</Link>
          </div>
          <div className='mka__footer-copyright'>
            ©Copyright 2022 <Link to='/'>MKAUTOMOBILE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
