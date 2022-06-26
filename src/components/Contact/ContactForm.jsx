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
      <> 
        <div className="mka__forms-purchase">
      <div className="mka__form-design">
        <form>
          <label>
            <textarea type="text" value={this.state.value} />
            <textarea type="text" value={this.state.value} />
          </label>
        </form>
      </div>
      <div className="mka__form-design">
        <form>
          <label>
            <textarea type="text" value={this.state.value} />
            <textarea type="text" value={this.state.value}/>
          </label>
        </form>
      </div>
      <div className="mka__form-design">
        <form>
          <label>
            <textarea type="text" value={this.state.value}/>
            <textarea type="text" value={this.state.value} />
          </label>
        </form>
      </div>
    </div>
    <div className="mka__button-align">
      <button type="submit" className="mka__form-button">
        SENDEN
      </button>
    </div>
    </>
    )
  }
}

export default ContactForm