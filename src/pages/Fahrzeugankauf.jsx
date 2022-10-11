import { Header, Navbar, Jumbotrone, Logo, CarPurchase } from '../components';
import React from 'react';

const Fahrzeugankauf = () => {
  return (
    <>
      <div id='header-img-id' className='header-img-div'>
        <Header />
        <Navbar />
        <div className='mka__logo-img'>
          <div className='mka__logo-size'>
            <Logo />
          </div>
        </div>
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1 className='mka__title'>FAHRZEUGANKAUF</h1>
          </div>
        </div>
      </div>
      <CarPurchase />
      <Jumbotrone />
    </>
  );
};

export default Fahrzeugankauf;
