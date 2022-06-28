import React, { Component } from 'react';


class Search extends Component {
    state = {
        text: '',
    }

    onChange = (e) => this.setState({text: e.target.value})

    render() {

    return (
    <div>
        <h6>FAHRZEUGSUCHE</h6>
        <div className='mka__search-divider'></div>
        <br />
        <form>
                <input
                  className="mka__search-input"
                  type="text"
                  value={this.state.text}
                  placeholder="Suche..."
                  onChange={this.onChange}
                />
         </form>
              </div>
        )
    }
}

export default Search