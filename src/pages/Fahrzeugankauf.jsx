import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, CarPurchase } from '../components';

const Fahrzeugankauf = ({ carsList }) => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar carsList={carsList} />
            <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>FAHRZEUGANKAUF</h1>
          </div>
        </div>
      </div>
      <CarPurchase />
      <Jumbotrone />
    </>
  );
};

export default Fahrzeugankauf;
