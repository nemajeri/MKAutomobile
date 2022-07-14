import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Search.css'

class Search extends Component {
    state = {
        text: '',
    }

    onChange = e => this.setState({text: e.target.value}) 

    handleChange = () => {
        this.props.carSearch(this.state.text);
        this.setState({text: ''})
    }

    render() {

    return (
    <div className='mka__left-alignment'>
        <h6>FAHRZEUGSUCHE</h6>
        <div className='mka__search-divider'></div>
        <br />
        <form>
                <input
                  className="dropbtn"
                  type="text"
                  value={this.state.text}
                  placeholder="Suche..."
                  onChange={"this.onChange; this.handleChange"}
                />
                <IconContext.Provider value={{ className: "fa-search-car-offers" }}>
                  {" "}
                  <FaSearch />
                </IconContext.Provider>
         </form>
              </div>
        )
    }
}

export default Search