import React from 'react';
import {Header, Navbar, Footer, Jumbotrone} from './components'
import {Datenschutz, Fahrzeugangebote, Fahrzeugankauf, Finanzierung, Galerie, Home, Impressium, Kontakt } from './pages'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/datenschutz' element={<Datenschutz/>} />
      <Route path='/fahrzeugangebote' element={<Fahrzeugangebote/>} />
      <Route path='/fahrzeugankauf' element={<Fahrzeugankauf/>} />
      <Route path='/finanzierung' element={<Finanzierung/>} />
      <Route path='/galerie' element={<Galerie/>} />
      <Route path='/impressium' element={<Impressium/>} />
      <Route path='/kontakt' element={<Kontakt/>} />
      </Routes>
      <Jumbotrone/>
      <Footer/>
    </Router>
  );
}

export default App;
