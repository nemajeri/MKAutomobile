import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Datenschutz, Fahrzeugangebote, Fahrzeugankauf, Finanzierung, Galerie, Home, Impressum, Kontakt, Fehler404, Fahrzeugdaten } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

const url = "http://finity.pro/clients/mkautomobile/cars/all";

function App() {

  const[carsList, setCarsList] = useState();

  useEffect(() => {
    fetchCars()
  },[]) 
    

  const fetchCars = async () => {
    try {
    const res = await axios.get(url);
    const data = res.data;
    setCarsList(data);
  }
    catch (error) {
      console.log(error.response.data.error)
    }
  }
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home carsList={carsList}/>} />
      <Route path='/datenschutz' element={<Datenschutz/>} />
      <Route path='/fahrzeugangebote' element={<Fahrzeugangebote/>} />
      <Route path='/fahrzeugankauf' element={<Fahrzeugankauf/>} />
      <Route path='/finanzierung' element={<Finanzierung/>} />
      <Route path='/galerie' element={<Galerie/>} />
      <Route path='/impressum' element={<Impressum/>} />
      <Route path='/kontakt' element={<Kontakt/>} />
      <Route path="*" element={<Fehler404/>} />
        <Route
          path="/fahrzeugdaten/:id" element={<Fahrzeugdaten/>}/>
      </Routes>
    </Router>
  );
}

export default App;
