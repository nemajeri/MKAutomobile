import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, CarOffers } from '../components';
import { CarsProvider } from '../components/utils/CarsContext';

const Fahrzeugangebote = ({ carsList }) => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar carsList={carsList} />
        <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>FAHRZEUGANGEBOTE</h1>
          </div>
        </div>
      </div>
      <CarsProvider>
        <CarOffers />
      </CarsProvider>
      <Jumbotrone />
    </>
  );
};

export default Fahrzeugangebote;
