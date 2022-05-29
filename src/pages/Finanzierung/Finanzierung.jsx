import React from 'react';
import './Finanzierung.css';
import {Header, Navbar, Footer, Jumbotrone} from '../../components'
import Financing from '../../components/Financing/Financing'

function Finanzierung() {
  return (
    <div>
         <Header/>
          <Navbar />
      <div className='page-container'>
      <Financing/>
    </div> 
    <Jumbotrone/>
      <Footer/>
      </div>
  );
}

export default Finanzierung;