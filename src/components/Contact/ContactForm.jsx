import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const onChangeName = (e) => {
      setName(e.target.value)
  }
  const onChangeLastname = (e) => {
      setLastname(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
}

const onChangeTelephone = (e) => {
    setTelephone(e.target.value)
}

const onChangeCompany = (e) => {
  setCompany(e.target.value)
}

const onChangeMessage = (e) => {
  setMessage(e.target.value)
}

  const onSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem('name', name);
      localStorage.setItem('lastname', lastname);
      localStorage.setItem('email', email);
      localStorage.setItem('telephone', telephone);
      localStorage.setItem('company', company);
      localStorage.setItem('message', message);
  }

  const getData = () => {
      console.log(localStorage.getItem('name'));
      console.log(localStorage.getItem('password'));
      console.log(localStorage.getItem('email'));
      console.log(localStorage.getItem('telephone'));
      console.log(localStorage.getItem('company'));
      console.log(localStorage.getItem('message'));

  }

    return (
      <form className="form" onSubmit={onSubmit}>
        <input className="form-field" placeholder="VORNAME" name="name" onChange={onChangeName} />
        <input className="form-field" placeholder="NACHNAME" name="lastname" onChange={onChangeLastname} />
        <input className="form-field" placeholder="E-MAIL" name="email" onChange={onChangeEmail} />
        <input className="form-field" placeholder="TEL" name="telephone" onChange={onChangeTelephone} />
        <input className="form-field" placeholder="FIRMA" name="company" onChange={onChangeCompany} />
        <input className="form-field" placeholder="IHRE NACHRICHT" name="message" onChange={onChangeMessage} />

        <div className="center">
          <button onClick ={getData} className="btn">
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
