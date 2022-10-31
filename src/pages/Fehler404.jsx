import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, Error404 } from '../components';

const Fehler404 = ({ carsList }) => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar carsList={carsList} />
            <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>FEHLER 404</h1>
          </div>
        </div>
      </div>
      <Error404 />
      <Jumbotrone />
    </>
  );
};

export default Fehler404;
