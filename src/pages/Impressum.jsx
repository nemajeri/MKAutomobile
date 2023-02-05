import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, Impression } from '../components';

const Impressum = () => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar />
            <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>IMPRESSUM</h1>
          </div>
        </div>
      </div>
      <Impression />
      <Jumbotrone />
    </>
  );
};

export default Impressum;
