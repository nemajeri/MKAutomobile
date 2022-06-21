import React from 'react';
import {Datenschutz, Fahrzeugangebote, Fahrzeugankauf, Finanzierung, Galerie, Home, Impressum, Kontakt } from './pages'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/datenschutz' element={<Datenschutz/>} />
      <Route path='/fahrzeugangebote' element={<Fahrzeugangebote/>} />
      <Route path='/fahrzeugankauf' element={<Fahrzeugankauf/>} />
      <Route path='/finanzierung' element={<Finanzierung/>} />
      <Route path='/galerie' element={<Galerie/>} />
      <Route path='/impressum' element={<Impressum/>} />
      <Route path='/kontakt' element={<Kontakt/>} />
      </Routes>
    </Router>
  );
}

export default App;
