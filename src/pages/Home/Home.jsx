import React from 'react';
import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  HomePageCarList,
} from '../../components';
import './Home.css';

const Home = ({ carsList }) => {
  return (
    <>
      <div className='mka__home-background-image'>
        <Header />
        <Navbar carsList={carsList} />
        <div className='mka__logo-img'>
          <div className='mka__logo-size_home'>
            <Logo />
          </div>
        </div>
        <h2>HERZLICH WILLKOMMEN</h2>
        <div className='mka__home-car-aligment'>
          <img
            className='mka__home-car-bmw'
            src={require('../../assets/bmw-min.png')}
            alt='bmw-min'
          />
          <img
            className='mka__home-car-mercedes'
            src={require('../../assets/mercedes-min.png')}
            alt='mercedes-min'
          />
        </div>
        <p className='mka__home-description'>
          Probefahrt und Besichtigung sind ausschließlich nach
          Terminvereinbarung möglich
        </p>
      </div>
      <HomePageCarList />
      <Jumbotrone />
    </>
  );
};

export default Home;
