import React from 'react' 
import './Navbar.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleSearch, setSearchWindow] = useState(false)
  return (
    <div className='mka__navbar'>
         <div className='mka__navbar-links'>
         <div className='mka__navbar-links_container'>
           <p><NavLink to='/'>HOME</NavLink></p>
           <p><NavLink to='/fahrzeugangebote'>FAHRZEUGANGEBOTE</NavLink></p>
           <p><NavLink to='/finanzierung'>FINANZIERUNG</NavLink></p>
           <p><NavLink to='/fahrzeugankauf'>FAHRZEUGANKAUF</NavLink></p>
           <p><NavLink to='/galerie'>GALERIE</NavLink></p>
           <p><NavLink to='/kontakt'>KONTAKT</NavLink></p>
           <div className='mka__search_column'>
        <p><i><FaSearch onClick={() => setSearchWindow(!toggleSearch)} /></i></p>
           {
            toggleSearch ?
              <div className='mka__search-div'>
              < input type="text" value="Suche..."/>  
              </div>
           : null
          }
           </div>
          </div>
          {
           toggleMenu  
          ? <AiOutlineClose color="#fff" className='mka___hamburger-menu' size={27} onClick={() => setToggleMenu(false)} />
          : <GiHamburgerMenu size={27} className='mka___hamburger-menu' color="#fff" onClick={() => setToggleMenu(true)} /> 
          }
          {
          <div className='mka__navbar-menu-margins'>
          <div className='mka__navbar-menu_container'>
            <div className='mka__navbar-menu_container-links'>
              <p><NavLink to='/'>HOME</NavLink></p>
         <p><NavLink to='/fahrzeugangebote'>FAHRZEUGANGEBOTE</NavLink></p>
         <p><NavLink to='/finanzierung'>FINANZIERUNG</NavLink></p>
         <p><NavLink to='/fahrzeugankauf'>FAHRZEUGANKAUF</NavLink></p>
         <p><NavLink to='/galerie'>GALERIE</NavLink></p>
         <p><NavLink to='/kontakt'>KONTAKT</NavLink></p>
              </div>
              </div>
              </div> && toggleMenu
          }
          </div>
      </div>
      
  );
}

export default Navbar;