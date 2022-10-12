import { Header, Navbar, Jumbotrone, Logo, Impression } from '../components';
import React from 'react';

const Impressum = ({ carsList }) => {
  return (
    <>
      <div id='header-img-id' className='header-img-div'>
        <Header />
        <Navbar carsList={carsList} />
        <div className='mka__logo-img'>
          <div className='mka__logo-size'>
            <Logo />
          </div>
        </div>
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1 className='mka__title'>IMPRESSUM</h1>
          </div>
        </div>
      </div>
      <Impression />
      <Jumbotrone />
    </>
  );
};

export default Impressum;
