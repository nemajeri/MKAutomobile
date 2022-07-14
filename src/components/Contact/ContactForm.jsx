import React, { Component } from 'react';
import './Contact.css';

class ContactForm extends Component {
      state = {
        value: ''
      }

      handleChange = this.handleChange.bind(this);

      handleChange(e) {
        this.setState({value: e.target.value});
      }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="form-field" placeholder="VORNAME" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="form-field" placeholder="NACHNAME" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="form-field" placeholder="E-MAIL" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="form-field" placeholder="TEL" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="form-field" placeholder="FIRMA" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="form-field" placeholder="IHRE NACHRICHT" type="text" value={this.state.value} onChange={this.handleChange} />

        <div class="center">
          <button class="btn">
            <svg class="button" width="180px" height="60px" viewBox="0 0 180 60" className="border">
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
