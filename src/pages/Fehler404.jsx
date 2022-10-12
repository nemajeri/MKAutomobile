import React from 'react';
import { Header, Navbar, Jumbotrone, Logo, Error404 } from '../components';

const Fehler404 = ({ carsList }) => {
  return (
    <>
      <div id='header-img-id' className='header-img-div'>
        <Header />
        <Navbar carsList={carsList} />
        <div className='mka__logo-img'>
          <div className='mka__logo-size'>
            <Logo />
          </div>
        </div>
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1 className='mka__title'>FEHLER 404</h1>
          </div>
        </div>
      </div>
      <Error404 />
      <Jumbotrone />
    </>
  );
};

export default Fehler404;
