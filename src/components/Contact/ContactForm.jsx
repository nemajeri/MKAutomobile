import React, { Component } from 'react';
import './Contact.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

  render() {
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input class="form-field" placeholder="VORNAME" type="text" value={this.state.value} onChange={this.handleChange} />
        <input class="form-field" placeholder="NACHNAME" type="text" value={this.state.value} onChange={this.handleChange} />
        <input class="form-field" placeholder="E-MAIL" type="text" value={this.state.value} onChange={this.handleChange} />
        <input class="form-field" placeholder="TEL" type="text" value={this.state.value} onChange={this.handleChange} />
        <input class="form-field" placeholder="FIRMA" type="text" value={this.state.value} onChange={this.handleChange} />
        <input class="form-field" placeholder="IHRE NACHRICHT" type="text" value={this.state.value} onChange={this.handleChange} />

        <div class="center">
          <button class="btn">
            <svg class="button" width="180px" height="60px" viewBox="0 0 180 60" class="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>SENDEN</span>
          </button>
        </div>

      </form>
    );
  }
}

export default ContactForm
