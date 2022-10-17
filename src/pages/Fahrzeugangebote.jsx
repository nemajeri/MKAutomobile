import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, CarOffers } from '../components';

const Fahrzeugangebote = ({ carsList }) => {
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
            <h1 className='mka__title'>FAHRZEUGANGEBOTE</h1>
          </div>
        </div>
      </div>
      <CarOffers />
      <Jumbotrone />
    </>
  );
};

export default Fahrzeugangebote;
