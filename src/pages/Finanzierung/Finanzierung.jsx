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
          </div>
      <Financing/>
    <Jumbotrone/>
      <Footer/>
      </div>
  );
}

export default Finanzierung;