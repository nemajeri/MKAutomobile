import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mka__div-footer'>
      <div className='mka__container'>
        <div className='mka__footer'>
          <div className='mka__footer-links'>
            <Link className='mka__footer-link' to='/datenschutz'>
              DATENSCHUTZ
            </Link>
            <Link className='mka__footer-link' to='/impressum'>
              IMPRESSUM
            </Link>
          </div>
          <div className='mka__footer-copyright'>
            ©Copyright 2022{' '}
            <Link className='mka__footer-link' to='/'>
              MKAUTOMOBILE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
