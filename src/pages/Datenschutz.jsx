import React from 'react';
import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  CopyrightPageContent,
} from '../components';

const Datenschutz = ({ carsList }) => {
  return (
    <>
      <div className='mka__header-background-img'>
        <Header />
        <Navbar carsList={carsList} />
        <Logo />
        <div className='mka__title-wrapper'>
          <div className='mka__container'>
            <h1>DATENSCHUTZ</h1>
          </div>
        </div>
      </div>
      <CopyrightPageContent />
      <Jumbotrone />
    </>
  );
};

export default Datenschutz;
