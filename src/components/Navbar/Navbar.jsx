import React from 'react' 
import './Navbar.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { Fade as Hamburger } from 'hamburger-react'
 
function Navbar() {
  const [isOpen, setOpen] = useState(false)
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
           <p><i>{ toggleSearch 
           ? < IoClose color="#fff" className='io-close' size={19} onClick={() => setSearchWindow(false)} />
           : < FaSearch onClick={() => setSearchWindow(true)}/> }</i></p>
           {
            toggleSearch &&
              <div className='mka__search-div'>
              < input type="text" value="Suche..."/>  
              </div>
          }
           </div>
          </div>
          {
        <div className='mka___hamburger-menu'>< Hamburger color="#fff" className='' size={27} toggled={isOpen} toggle={setOpen} /></div>
          }
          {
            isOpen  &&  <div className='mka__navbar-menu-margins'>
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
              </div> 
          }
          </div>
      </div>
      
  );
}

export default Navbar;