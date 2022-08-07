import React from 'react'
import './Fahrzeugdaten.css'
import {
    Header,
    Navbar,
    Jumbotrone,
    Logo,
    CarPage
  } from "../../components"

const AutoSeite = () => {
  return (
    <>
    <div id="header-img-id" className="header-img-div">
      <Header />
      <Navbar />
      <div className="mka__logo-img">
        <div className="mka__logo-size">
          <Logo />
        </div>
      </div>
      <div className="mka__title-wrapper">
        <div className="mka__container">
          <h1 className="mka__title">FAHRZEUGDATEN</h1>
        </div>
      </div>
    </div>
    <div>
      <CarPage/>
    </div>
    <Jumbotrone />
  </>
  )
}

export default AutoSeite