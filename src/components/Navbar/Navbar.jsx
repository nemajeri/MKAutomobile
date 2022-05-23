import React from 'react' 
import './Navbar.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Hamburger from 'hamburger-react'


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [toggleSearch, setSearchWindow] = useState(false)
  return (
    <div className='mka__navbar'>
         <div className='mka__navbar-links'>
         <div className='mka__navbar-links_container'>
           <p><a href='/'>HOME</a></p>
           <p><a href='/fahrzeugangebote'>FAHRZEUGANGEBOTE</a></p>
           <p><a href='/finanzierung'>FINANZIERUNG</a></p>
           <p><a href='/fahrzeugankauf'>FAHRZEUGANKAUF</a></p>
           <p><a href='/galerie'>GALERIE</a></p>
           <p><a href='/kontakt'>KONTAKT</a></p>
           <p><i><FaSearch onClick={() => setSearchWindow(!toggleSearch)} /></i></p>
           {
            toggleSearch ?
              <div className='mka__search-div'>
              < input type="text"/>  
              </div>
           : null
          }
        </div>
        <div className='mka__navbar-menu'>
        {
            toggleMenu ?
              <div className='mka__navbar-menu_container scale scale-up-center'>
                <div className='mka__navbar-menu_container-links'>
                <p><a href='/'>HOME</a></p>
           <p><a href='/fahrzeugangebote'>FAHRZEUGANGEBOTE</a></p>
           <p><a href='/finanzierung'>FINANZIERUNG</a></p>
           <p><a href='/fahrzeugankauf'>FAHRZEUGANKAUF</a></p>
           <p><a href='/galerie'>GALERIE</a></p>
           <p><a href='/kontakt'>KONTAKT</a></p>
                </div>
              </div>
           : null
          }
          <Hamburger color="#fff" direction="right" duration="0.1" size={27} onClick={() => setToggleMenu(!toggleMenu)} /> 
        </div>
      </div>
    </div>

  );
}

export default Navbar;