import './Home.css';
import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  HomePageCarList,
} from '../../components';
import React from 'react';

const Home = ({ carsList }) => {
  return (
    <>
      <div id='home-img-id' className='home-img-div'>
        <Header />
        <Navbar carsList={carsList} />
        <div className='mka__logo-img'>
          <div className='mka__logo-size'>
            <Logo />
          </div>
        </div>
        <h2 id='mka__home-subtitle'>HERZLICH WILLKOMMEN</h2>
        <div className='car-aligment'>
          <img
            id='bmw-min'
            className='mka__car-img'
            src={require('../../assets/bmw-min.png')}
            alt='bmw-min'
          />
          <img
            id='mercedes-min'
            className='mka__car-img'
            src={require('../../assets/mercedes-min.png')}
            alt='mercedes-min'
          />
        </div>
        <p id='mka__home-description'>
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
