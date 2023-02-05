import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, CarPage } from '../components';

const Fahrzeugdaten = () => {
  return (
    <div>

        <div className='mka__header-background-img'>
          <Header />
          <Navbar />
          <Logo />
          <div className='mka__title-wrapper'>
            <div className='mka__container'>
              <h1>FAHRZEUGDATEN</h1>
            </div>
          </div>
        </div>
        <CarPage />
        <Jumbotrone />
    </div>
  );
};

export default Fahrzeugdaten;
