import React from 'react' 
import './Navbar.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [toggleSearch, setSearchWindow] = useState(false)
  return (
    <div className='mka__navbar'>
         <div className='mka__navbar-links'>
         <div className='mka__navbar-links_container'>
           <p id='/'><NavLink to='/'>HOME</NavLink></p>
           <p id='/fahrzeugangebote'><NavLink to='/fahrzeugangebote'>FAHRZEUGANGEBOTE</NavLink></p>
           <p id='/finanzierung'><NavLink to='/finanzierung'>FINANZIERUNG</NavLink></p>
           <p id='/fahrzeugankauf'><NavLink to='/fahrzeugankauf'>FAHRZEUGANKAUF</NavLink></p>
           <p id='/galerie'><NavLink to='/galerie'>GALERIE</NavLink></p>
           <p id='/kontakt'><NavLink to='/kontakt'>KONTAKT</NavLink></p>
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
        <div className='mka__navbar-menu'>
        {
            toggleMenu ?
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
           : null
          }
             <Hamburger color="#fff" direction="right" duration="0.1" size={27} onClick={() => setToggleMenu(!toggleMenu)} /> 
          </div>
      </div>
    </div>

  );
}

export default Navbar;