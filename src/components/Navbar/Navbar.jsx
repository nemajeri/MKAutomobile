import React, { useState } from 'react';
import Search from '../CarOffers/SearchInput/Search';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Fade as Hamburger } from 'hamburger-react';
import { IconContext } from 'react-icons';
import './Navbar.css';
import NavbarLink from './NavbarLink';

import { CarsProvider } from '../../components/utils/CarsContext';

const links = [
  'HOME',
  'FAHRZEUGANGEBOTE',
  'FINANZIERUNG',
  'FAHRZEUGANKAUF',
  'GALERIE',
  'KONTAKT',
];

const Navbar = ({ carsList }) => {
  const [isOpen, setOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div className='mka__navbar'>
      <div className='mka__navbar-links'>
        <div className='mka__navbar-links_container'>
          {links.map((link, index) => (
            <NavbarLink key={index} link={link} />
          ))}
          <div className='mka__search_column'>
            <a>
              <i>
                {toggleSearch ? (
                  <IconContext.Provider value={{ className: 'io-close' }}>
                    {' '}
                    <IoClose onClick={() => setToggleSearch(false)} />
                  </IconContext.Provider>
                ) : (
                  <FaSearch onClick={() => setToggleSearch(true)} />
                )}
              </i>
            </a>
            {toggleSearch && (
              <div className='mka__search-div'>
                <CarsProvider>
                  <Search carsList={carsList} />
                </CarsProvider>
              </div>
            )}
          </div>
        </div>
        {
          <div className='mka___hamburger-menu'>
            <Hamburger
              color='#fff'
              className=''
              size={27}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        }
        {isOpen && (
          <div className='mka__navbar-menu-margins'>
            <div className='mka__navbar-menu_container'>
              <div className='mka__navbar-menu_container-links'>
                {links.map((link, index) => (
                  <NavbarLink key={index} link={link} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
