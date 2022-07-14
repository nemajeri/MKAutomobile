import React, { Component } from 'react'

export class CarSorting extends Component {
  render() {
    return (
      <div>
        <div>
        <label for="cars">12</label>
        <select id="cars" name="cars">
    <option>24</option>
    <option>36</option>
    <option>48</option>
    <option>64</option>
    </select>
        </div>
        <label for="cars">Default sortierung</label>
        <select id="cars" name="cars">
    <option>Sortieren nach Namen</option>
    <option>Sortieren nach Preis</option>
    <option>Sortieren nach Daten</option>
    <option>Sortieren nach Jahr</option>
    </select>
      </div>
    )
  }
}

export default CarSorting