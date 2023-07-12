import React, { useState, useRef } from 'react';
import Search from '../CarOffers/SearchInput/Search';
import { FaSearch, FaExchangeAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Fade as Hamburger } from 'hamburger-react';
import './Navbar.css';
import NavbarLink from './NavbarLink';
import ReactDOM from 'react-dom';

import CarPropertiesColumn from './CarPropertiesColumn';
import IndividualCarColumn from './IndividualCarColumn';

import { useSelector, useDispatch } from 'react-redux';
import { setCarsToCompare } from '../utils/store';

const links = [
  'HOME',
  'FAHRZEUGANGEBOTE',
  'FINANZIERUNG',
  'FAHRZEUGANKAUF',
  'GALERIE',
  'KONTAKT',
];

const Navbar = () => {
  const carsToCompare = useSelector((state) => state.carsToCompare);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const tableEl = useRef(null);

  const modalRoot = document.getElementById('table-root');

  const onClickDeleteCarHandler = (car) => {
    dispatch(
      setCarsToCompare(new Set([...carsToCompare].filter((c) => c !== car)))
    );
  };

  return (
    <div className='mka__navbar'>
      <div className='mka__navbar-links'>
        <div className='mka__navbar-links_container'>
          {links.map((link, index) => (
            <NavbarLink key={index} link={link} />
          ))}
          <div className='mka__search_column'>
            {carsToCompare.size !== 0 && (
              <div onClick={() => setShowTable(true)}>
                <i>
                  <div className='mka__array-length_circle'>
                    <p>{carsToCompare.size}</p>
                  </div>
                  <FaExchangeAlt className='fa-exchange' />
                </i>
              </div>
            )}
            <div>
              <i>
                {toggleSearch ? (
                  <IoClose
                    className='mka__navbar-search_icon'
                    onClick={() => setToggleSearch(false)}
                  />
                ) : (
                  <FaSearch
                    className='mka__navbar-search_icon'
                    onClick={() => setToggleSearch(true)}
                  />
                )}
              </i>
            </div>
            {toggleSearch && (
              <div className='mka__search-container'>
                <Search />
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
        {showTable &&
          ReactDOM.createPortal(
            <div className='table' ref={tableEl}>
              <div className='mka__table-headline'>
                <div onClick={() => setShowTable(false)}>
                  <IoClose className='io-close-table' />
                </div>
                <h3>COMPARE CARS</h3>
              </div>
              <div className='mka__table-body'>
                <CarPropertiesColumn />
                <div className='mka__place-for-cars_table'>
                  {Array.from(carsToCompare).map((car) => (
                    <IndividualCarColumn
                      key={car.id}
                      car={car}
                      onClickDeleteCarHandler={onClickDeleteCarHandler}
                    />
                  ))}
                </div>
              </div>
            </div>,
            modalRoot
          )}
      </div>
    </div>
  );
};

export default Navbar;
