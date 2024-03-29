import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, Gallery } from '../components';

const Datenschutz = () => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar />
            <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>GALERIE</h1>
          </div>
        </div>
      </div>
      <Gallery />
      <Jumbotrone />
    </>
  );
};

export default Datenschutz;
