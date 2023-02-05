import React, { useState, useRef } from 'react';
import Search from '../CarOffers/SearchInput/Search';
import { FaSearch, FaExchangeAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Fade as Hamburger } from 'hamburger-react';
import { IconContext } from 'react-icons';
import './Navbar.css';
import NavbarLink from './NavbarLink';
import ReactDOM from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
  const carsToCompare = useSelector(state => state.carsToCompare);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const tableEl = useRef(null);

  const modalRoot = document.getElementById('table-root');

  const onClickDeleteCarHandler = (car) => {
    dispatch(setCarsToCompare(new Set([...carsToCompare].filter(c => c !== car))));
  }

  return (
    <div className='mka__navbar'>
      <div className='mka__navbar-links'>
        <div className='mka__navbar-links_container'>
          {links.map((link, index) => (
            <NavbarLink key={index} link={link} />
          ))}
          <div className='mka__search_column'>
            {carsToCompare.size !== 0 ? (
              <a onClick={() => setShowTable(true)}>
                <i>
                  <div className='mka__array-length_circle'>
                    <p>{carsToCompare.size}</p>
                  </div>
                  <IconContext.Provider value={{ className: 'fa-exchange' }}>
                    <FaExchangeAlt />
                  </IconContext.Provider>
                </i>
              </a>
            ) : null}
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
              <IconContext.Provider value={{ className: 'io-close-table' }}>
                <IoClose/>
                </IconContext.Provider>
                </div>
                <h3>COMPARE CARS</h3>
              </div>
              <div className='mka__table-body'>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td id='mka__delete-car--row'></td>
                      </tr>
                      <tr>
                        <td id='mka__price-and--image'>Price</td>
                      </tr>
                      <tr>
                        <td>Year</td>
                      </tr>
                      <tr>
                        <td>Make</td>
                      </tr>
                      <tr>
                        <td>Model</td>
                      </tr>
                      <tr>
                        <td>Body Style</td>
                      </tr>
                      <tr>
                        <td>Mileage</td>
                      </tr>
                      <tr>
                        <td>Fuel Economy</td>
                      </tr>
                      <tr>
                        <td>Transmission</td>
                      </tr>
                      <tr>
                        <td>Condition</td>
                      </tr>
                      <tr>
                        <td>Drivetrain</td>
                      </tr>
                      <tr>
                        <td>Engine</td>
                      </tr>
                      <tr>
                        <td>Exterior Color</td>
                      </tr>
                      <tr>
                        <td>Features & Options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='mka__place-for-cars_table'>
                {Array.from(carsToCompare).map(car => (
                <div key={car.id} className='mka__place-for-car_table'>
                  <table>
                    <tbody>
                      <tr>
                        <td id='mka__delete-car--row' onClick={() => onClickDeleteCarHandler(car)}>
                        <IconContext.Provider value={{ className: 'ai-close' }}>
                          <AiOutlineCloseCircle/>
                          </IconContext.Provider>
                          </td>
                      </tr>
                      <tr>
                        <td id='mka__price-and--image'>
                        {car.link && <img src={require(`../../assets/${car.link}`)} alt='suggested-cars' className='car-in-comparison' />}
                          <p>{car.price}</p>
                          </td>
                      </tr>
                      <tr>
                        <td>{car.year}</td>
                      </tr>
                      <tr>
                        <td>{car.make}</td>
                      </tr>
                      <tr>
                        <td>{car.model}</td>
                      </tr>
                      <tr>
                        <td>{car.exteriror}</td>
                      </tr>
                      <tr>
                        <td>{car.mileage}</td>
                      </tr>
                      <tr>
                        <td>{car.link}</td>
                      </tr>
                      <tr>
                        <td>{car.transmission}</td>
                      </tr>
                      <tr>
                        <td>{car.condition}</td>
                      </tr>
                      <tr>
                        <td>{car.drivetrain}</td>
                      </tr>
                      <tr>
                        <td>{car.engine}</td>
                      </tr>
                      <tr>
                        <td>{car.exteriror}</td>
                      </tr>
                      <tr>
                        <td>Features & Options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
