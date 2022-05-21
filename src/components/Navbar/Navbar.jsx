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
           
        </div>
        <div className='dropdown'>
          {toggleSearch
          ? <AiOutlineClose color="#fff" size={14} onClick={() => setSearchWindow(false)} />
          : <FaSearch color="#fff" onmouseover="#cf2e2e" size={14} onClick={() => setSearchWindow(true)} />
          }
          {
            toggleSearch && (
              <form>
                 <label>
                   <input type="text" name="name" value="Suche... " />
                      <i>
                       <FaSearch />
                      </i>
                  </label>
               </form>
            )
          }
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