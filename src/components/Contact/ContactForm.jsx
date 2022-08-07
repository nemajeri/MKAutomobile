import React from 'react';
import './Contact.css';

const ContactForm = () => {

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object

    console.log(inputObject);
  };

    return (
      <form className="form" onSubmit={submitForm}>
        <input className="form-field" placeholder="VORNAME" name="name" />
        <input className="form-field" placeholder="NACHNAME" name="lastname" />
        <input className="form-field" placeholder="E-MAIL" name="email" />
        <input className="form-field" placeholder="TEL" name="telephone" />
        <input className="form-field" placeholder="FIRMA" name="company" />
        <input className="form-field" placeholder="IHRE NACHRICHT" name="message" />

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

export default ContactForm
