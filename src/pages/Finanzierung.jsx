import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, Financing } from '../components';

const Finanzierung = () => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar />
            <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>FINANZIERUNG</h1>
          </div>
        </div>
      </div>
      <Financing />
      <Jumbotrone />
    </>
  );
};

export default Finanzierung;
