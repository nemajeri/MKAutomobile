import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, CarPage } from '../components';

const Fahrzeugdaten = ({ carsList }) => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar carsList={carsList} />
            <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>FAHRZEUGDATEN</h1>
          </div>
        </div>
      </div>
      <div>
        <CarPage carsList={carsList} />
      </div>
      <Jumbotrone />
    </>
  );
};

export default Fahrzeugdaten;
