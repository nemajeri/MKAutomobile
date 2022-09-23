import React, { useState } from 'react';
import DropzoneElement from "../Dropzone/Dropzone";


const ContactForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [company, setCompany] = useState('');
  const [street, setStreet] = useState('');
  const [plz, setPlz] = useState('');
  const [city, setCity] = useState('');
  const [fax, setFax] = useState('');
  const [phone, setPhone] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [mileage, setMileage] = useState('');
  const [registration, setRegistration] = useState('');
  const [gender, setGender] = useState('GESCHLECHT');
  const [fuel, setFuel] = useState('KRAFTSTOFF');
  const [state, setState] = useState('AKTUELLER ZUSTAND');
  const [equipment, setEquipment] = useState('');


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

const onChangeStreet = (e) => {
  setStreet(e.target.value)
}

const onChangePlz = (e) => {
  setPlz(e.target.value)
}

const onChangeCity = (e) => {
  setCity(e.target.value)
}

const onChangeFax = (e) => {
  setFax(e.target.value)
}

const onChangePhone = (e) => {
  setPhone(e.target.value)
}

const onChangeMake = (e) => {
  setMake(e.target.value)
}

const onChangeModel = (e) => {
  setModel(e.target.value)
}

const onChangeSuggestion = (e) => {
  setSuggestion(e.target.value)
}

const onChangeMileage = (e) => {
  setMileage(e.target.value)
}

const onChangeRegistration = (e) => {
  setRegistration(e.target.value)
}

const onChangeEquipment = (e) => {
  setEquipment(e.target.value)
}

const onChangeGender = (e) => {
  setGender(e.target.value)
}

const onChangeFuel = (e) => {
  setFuel(e.target.value)
}

const onChangeState = (e) => {
  setState(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  localStorage.setItem('name', name);
  localStorage.setItem('lastname', lastname);
  localStorage.setItem('email', email);
  localStorage.setItem('telephone', telephone);
  localStorage.setItem('company', company);
  localStorage.setItem('street', street);
  localStorage.setItem('plz', plz);
  localStorage.setItem('city', city);
  localStorage.setItem('fax', fax);
  localStorage.setItem('phone', phone);
  localStorage.setItem('make', make);
  localStorage.setItem('model', model);
  localStorage.setItem('suggestion', suggestion);
  localStorage.setItem('mileage', mileage);
  localStorage.setItem('registration', registration);
  localStorage.setItem('gender', gender);
  localStorage.setItem('fuel', fuel);
  localStorage.setItem('state', state);
  localStorage.setItem('equipment', equipment);
}

const setData = () => {
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('password'));
  console.log(localStorage.getItem('email'));
  console.log(localStorage.getItem('telephone'));
  console.log(localStorage.getItem('company'));
  console.log(localStorage.setItem('street'));
  console.log(localStorage.setItem('plz'));
  console.log(localStorage.setItem('city'));
  console.log( localStorage.setItem('fax'));
  console.log( localStorage.setItem('phone'));
  console.log( localStorage.setItem('make'));
  console.log( localStorage.setItem('model'));
  console.log( localStorage.setItem('suggestion'));
  console.log( localStorage.setItem('mileage'));
  console.log( localStorage.setItem('registration'));
  console.log( localStorage.setItem('gender'));
  console.log( localStorage.setItem('fuel'));
  console.log(localStorage.setItem('state'));
  console.log(localStorage.setItem('equipment'));
}

    return (
      <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
        <h4>Personliche Daten</h4>
        <input required className="form-field" placeholder="VORNAME" name='name'  type="text" onChange={onChangeName} />
        <input required className="form-field" placeholder="NACHNAME" name='lastname'  type="text" onChange={onChangeLastname} />
        <select required onChange={onChangeGender} defaultValue={gender} name="gender">
          <option value='FRAU'>FRAU</option>
          <option value='HERR'>HERR</option>
          </select>
        <input required className="form-field" placeholder="STRASSE/NR." type="text" name='street'  onChange={onChangeStreet} />
        <input required className="form-field" placeholder="PLZ" type="text" name='plz' onChange={onChangePlz} />
        <input required className="form-field" placeholder="STADT" type="text" name='city' onChange={onChangeCity} />
        <input required className="form-field" placeholder="FIRMA" type="text" name='company' onChange={onChangeCompany} />
        </div>
        <div>
        <h4>Kontaktdaten</h4>
        <input required className="form-field" placeholder="E-MAIL" type="email" name='email'  onChange={onChangeEmail} />
        <input required className="form-field" placeholder="MOBILNUMMER" type="text" name='telephone' onChange={onChangeTelephone} />
        <input required className="form-field" placeholder="FAX" type="text" name='fax'  onChange={onChangeFax} />
        <input required className="form-field" placeholder="TEL" type="text" name='phone'  onChange={onChangePhone} />
        </div>
        <div>
        <h4>Fahzeugdaten</h4>
        <input required className="form-field" placeholder="MARKE" type="text" name='make' onChange={onChangeMake} />
        <input required className="form-field" placeholder="MODELL" type="text" name='model' onChange={onChangeModel} />
        <input required className="form-field" placeholder="PREISVORSTELLUNG" type="text" name='suggestion'  onChange={onChangeSuggestion} />
        <select required onChange={onChangeFuel} defaultValue={fuel} name="fuel">
          <option value='Benzin'>Bezin</option>
          <option value='Diesel'>Diesel</option>
          <option value='Elektro'>Elektro</option>
          <option value='Gas'>Gas</option>
          <option value='Hybrid'>Hybrid</option>
          </select>
        <input className="form-field" placeholder="KILOMETERSTAND" type="text" name='mileage' onChange={onChangeMileage} />
        <select required onChange={onChangeState} defaultValue={state} name = "state">
          <option value='NEUWERTIG'>NEUWERTIG</option>
          <option value='ALTERSBEDINGTE ABNUTZUNG'>ALTERSBEDINGTE ABNUTZUNG</option>
          <option value='KLEINERE SCHÄDE'>KLEINERE SCHÄDE</option>
          <option value='STARK BESCHÄDIGT'>STARK BESCHÄDIGT</option>
          <option value='UNFALLFAHRZEUG'>UNFALLFAHRZEUG</option>
        </select>
        <input required className="form-field" placeholder="EZ DES FAHRZEUGS" type="text" name='registration' onChange={onChangeRegistration} />
        <textarea required className="form-field larger" placeholder="SONDERAUSSTATTUNGEN" type="text" name='equipment' onChange={onChangeEquipment} />
        </div>
        </form>
        <br/>
        <div>
        <h6>Fahrzeugbilder</h6>
        <DropzoneElement/>
        </div>
        <div className="end">
          <button onClick ={setData} className="btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>SENDEN</span>
          </button>
        </div>
      </>
    );
  }

export default ContactForm
