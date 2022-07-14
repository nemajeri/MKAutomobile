import React, { Component } from 'react'
import './FilterSideBar.css'

export class FilterSideBar extends Component {

  render() {
    return (
      <div className='mka__filter-text-align'>
            <h6>DETAILSUCHE</h6>
        <div className='mka__filter-divider'></div>
        <div class="dropdown">
  <button class="dropbtn">Marke</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
</div>
    )
  }
}

export default FilterSideBar