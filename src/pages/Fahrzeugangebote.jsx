import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, CarOffers } from '../components';

const Fahrzeugangebote = () => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar />
        <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>FAHRZEUGANGEBOTE</h1>
          </div>
        </div>
      </div>
      <CarOffers />
      <Jumbotrone />
    </>
  );
};

export default Fahrzeugangebote;
