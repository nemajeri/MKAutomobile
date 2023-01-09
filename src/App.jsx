import React from 'react';
import {
  Datenschutz,
  Fahrzeugangebote,
  Fahrzeugankauf,
  Finanzierung,
  Galerie,
  Home,
  Impressum,
  Kontakt,
  Fehler404,
  Fahrzeugdaten,
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ScrollToTopWrapper  from './components/utils/ScrollToTopWrapper';
import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTopWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
        <Route path='/fahrzeugangebote' element={<Fahrzeugangebote />} />
        <Route path='/fahrzeugankauf' element={<Fahrzeugankauf />} />
        <Route path='/finanzierung' element={<Finanzierung />} />
        <Route path='/galerie' element={<Galerie />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='*' element={<Fehler404 />} />
        <Route path='/fahrzeugdaten/:id' element={<Fahrzeugdaten />} />
      </Routes>
      </ScrollToTopWrapper>
    </Router>
  );
};

export default App;
