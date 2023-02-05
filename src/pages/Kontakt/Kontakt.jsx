import React from 'react';
import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  ContactPageContent,
} from '../../components';
import './Kontakt.css';

const Kontakt = () => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar />
        <Logo />
        <p className='mka__contact-description'>
          Probefahrt und Besichtigung sind ausschließlich nach
          Terminvereinbarung möglich
        </p>
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>KONTAKT</h1>
          </div>
        </div>
      </div>
      <ContactPageContent />
      <Jumbotrone />
    </>
  );
};

export default Kontakt;
