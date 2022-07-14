import React, { Component } from 'react'
import './FilterSideBar.css'

export class FilterSideBar extends Component {

  render() {
    return (
      <div className='mka__filter-text-align'>
            <h6>DETAILSUCHE</h6>
        <div className='mka__filter-divider'></div>
        <br />
        <p>Fahrzeuge</p>
        <form>
        <label className="custom-select">
        <select>
        <option value="1">Marke</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
        <label className="custom-select">
        <select>
        <option value="1">Modell</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
        <label className="custom-select">
        <select>
        <option value="1">Erstzulassung</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
        <label className="custom-select">
        <select>
        <option value="1">Kilometer</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
        <label className="custom-select">
        <select>
        <option value="1">Treibstoff</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
        <label className="custom-select">
        <select>
        <option value="1">Getriebeart</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
        <label className="custom-select">
        <select>
        <option value="1">Antrieb</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        </select>
        </label>
         </form>
         <button className='mka__search-button'>Zurücksetzen</button>
              </div>
    )
  }
}

export default FilterSideBar