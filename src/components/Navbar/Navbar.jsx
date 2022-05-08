import React from 'react' 
import './Navbar.css'


function Navbar() {
  return (
    <div className='mka__navbar'>
      <div className='mka__navbar-links'>
         <div className='mka__navbar-links'>
         <div className='mka__navbar-links_container'>
           <p><a href='/'>HOME</a></p>
           <p><a href='/fahrzeugangebote'>FAHRZEUGANGEBOTE</a></p>
           <p><a href='/finanzierung'>FINANZIERUNG</a></p>
           <p><a href='/fahrzeugankauf'>FAHRZEUGANKAUF</a></p>
           <p><a href='/galerie'>GALERIE</a></p>
           <p><a href='/kontakt'>KONTAKT</a></p>

        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;