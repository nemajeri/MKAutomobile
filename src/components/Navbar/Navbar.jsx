import React, { useState } from 'react';
import Search from '../CarOffers/SearchInput/Search';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { Fade as Hamburger } from 'hamburger-react';
import { IconContext } from 'react-icons';
import './Navbar.css';

const Navbar = ({ carsList }) => {
  //Napraviti useToggle hook pa probati da ga koristim
  const [isOpen, setOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div className='mka__navbar'>
      <div className='mka__navbar-links'>
        <div className='mka__navbar-links_container'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mka__link-active' : 'mka__link-inactive'
            }
            to='/'
            end
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mka__link-active' : 'mka__link-inactive'
            }
            to='/fahrzeugangebote'
          >
            FAHRZEUGANGEBOTE
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mka__link-active' : 'mka__link-inactive'
            }
            to='/finanzierung'
          >
            FINANZIERUNG
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mka__link-active' : 'mka__link-inactive'
            }
            to='/fahrzeugankauf'
          >
            FAHRZEUGANKAUF
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mka__link-active' : 'mka__link-inactive'
            }
            to='/galerie'
          >
            GALERIE
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mka__link-active' : 'mka__link-inactive'
            }
            to='/kontakt'
          >
            KONTAKT
          </NavLink>
          <div className='mka__search_column'>
            {/* eslint-disable-next-line */}
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
                <Search carsList={carsList} />
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
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'mka__link-active' : 'mka__link-inactive'
                  }
                  to='/'
                >
                  HOME
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'mka__link-active' : 'mka__link-inactive'
                  }
                  to='/fahrzeugangebote'
                >
                  FAHRZEUGANGEBOTE
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'mka__link-active' : 'mka__link-inactive'
                  }
                  to='/finanzierung'
                >
                  FINANZIERUNG
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'mka__link-active' : 'mka__link-inactive'
                  }
                  to='/fahrzeugankauf'
                >
                  FAHRZEUGANKAUF
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'mka__link-active' : 'mka__link-inactive'
                  }
                  to='/galerie'
                >
                  GALERIE
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'mka__link-active' : 'mka__link-inactive'
                  }
                  to='/kontakt'
                >
                  KONTAKT
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
