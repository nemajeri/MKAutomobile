import React from 'react' 
import './Navbar.css'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
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
           <p><i><FaSearch /></i></p>
        </div>
        <div className='mka__navbar-menu'>
          {toggleMenu
          ? <AiOutlineClose color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <GiHamburgerMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
          }
          {
            toggleMenu && (
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
            )
          }
        </div>
      </div>
    </div>

  );
}

export default Navbar;