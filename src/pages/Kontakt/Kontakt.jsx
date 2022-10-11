import './Kontakt.css';
import { Header, Navbar, Jumbotrone, Logo, Contact } from '../../components';
import React from 'react';

const Kontakt = () => {
  return (
    <>
      <div id='header-img-id' className='header-img-div'>
        <Header />
        <Navbar />
        <div className='mka__logo-img'>
          <div className='mka__logo-size mka__logo-size-kontakt'>
            <Logo />
          </div>
        </div>
        <p id='mka__contact-description'>
          Probefahrt und Besichtigung sind ausschließlich nach
          Terminvereinbarung möglich
        </p>
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1 className='mka__title'>KONTAKT</h1>
          </div>
        </div>
      </div>
      <Contact />
      <Jumbotrone />
    </>
  );
};

export default Kontakt;
