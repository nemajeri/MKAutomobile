import React, { Component } from 'react'
import './CarSorting.css'

export class CarSorting extends Component {
  render() {
    return (
      <div className='mka__sorting-alignment'>
      <div>
        <form>
       <label className="sorting-select">
      <select id='mka__sorting-number'>
      <option value="1">12</option>
      <option value="2">24</option>
      <option value="3">48</option>
      <option value="4">64</option>
      </select>
      </label>
  </form>
      </div>
      <div>
      <form>
       <label className="sorting-select">
      <select>
      <option value="1">Default Sortierung</option>
      <option value="2">Sortieren nach Namen</option>
      <option value="3">Sortieren nach Preis</option>
      <option value="4">Sortieren von Daten</option>
      <option value="5">Sortieren nach Jahr</option>
      </select>
      </label>
  </form>
  </div>
    </div>
    )
  }
}

export default CarSorting