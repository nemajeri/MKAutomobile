import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import './App.css';

const App = () => {
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_MY_API_KEY);
      const data = res.data;
      setCarsList(data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home carsList={carsList} />} />
        <Route
          path='/datenschutz'
          element={<Datenschutz carsList={carsList} />}
        />
        <Route
          path='/fahrzeugangebote'
          element={<Fahrzeugangebote carsList={carsList} />}
        />
        <Route
          path='/fahrzeugankauf'
          element={<Fahrzeugankauf carsList={carsList} />}
        />
        <Route
          path='/finanzierung'
          element={<Finanzierung carsList={carsList} />}
        />
        <Route path='/galerie' element={<Galerie carsList={carsList} />} />
        <Route path='/impressum' element={<Impressum carsList={carsList} />} />
        <Route path='/kontakt' element={<Kontakt carsList={carsList} />} />
        <Route path='*' element={<Fehler404 carsList={carsList} />} />
        <Route
          path='/fahrzeugdaten/:id'
          element={<Fahrzeugdaten carsList={carsList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
