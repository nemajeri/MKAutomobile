import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, Financing } from '../components';

const Finanzierung = ({ carsList }) => {
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
            <h1 className='mka__title'>FINANZIERUNG</h1>
          </div>
        </div>
      </div>
      <Financing />
      <Jumbotrone />
    </>
  );
};

export default Finanzierung;
