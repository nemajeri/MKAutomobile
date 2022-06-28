import React, { Component } from 'react'

export class FilterSideBar extends Component {

  render() {
    return (
      <div>
            <h6>DETAILSUCHE</h6>
        <div className='mka__filter-divider'></div>
        <br />
        <p>Fahrzeuge</p>
        <form>
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Marke"
                />
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Modell"
                />
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Erstzulassung"
                />
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Kilometer"
                />
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Treibstoff"
                />
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Antrieb"
                />
                <input
                  className="mka__search-input"
                  type="dropdown"
                  placeholder="Marke"
                />
         </form>
         <button className='mka__search-button' value='Zurucksetzen'> </button>
              </div>
    )
  }
}

export default FilterSideBar