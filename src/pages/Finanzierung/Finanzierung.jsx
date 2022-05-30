import React from 'react';
import './Finanzierung.css';
import {Header, Navbar, Footer, Jumbotrone} from '../../components'
import Financing from '../../components/Financing/Financing'

function Finanzierung() {
  return (
    <div>
      <div id='header-img-id' className='header-img-div'>
         <Header/>
          <Navbar />
          <div className='mka__title-container'>
          <h1>FINANZIERUNG</h1>
          </div>
          </div>
      <Financing/>
    <Jumbotrone/>
      <Footer/>
      </div>
  );
}

export default Finanzierung;