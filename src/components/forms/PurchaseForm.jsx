import React from 'react';
import DropzoneElement from '../Dropzone/Dropzone';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ContactForm = () => {
  let schema = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup
      .string()
      .matches(/^\+4[139] \(0\d+\) \d{9,}$/)
      .required(),
    company: yup.string().required(),
    message: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    fax: yup.string().matches().required(),
    plz: yup
      .string()
      .matches(/^\d{4}$/)
      .required(),
    phone: yup
      .string()
      .matches(/^\+4[139] \(0\d+\) \d{9,}$/)
      .required(),
    make: yup.string().required(),
    model: yup.string().required(),
    mileage: yup.string().required(),
    suggestion: yup.string().required(),
    registration: yup.string().required(),
    gender: yup.string().required(),
    fuel: yup.string().required(),
    state: yup.string().required(),
    equipment: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      telephone: '',
      company: '',
      street: '',
      plz: '',
      city: '',
      fax: '',
      phone: '',
      make: '',
      model: '',
      suggestion: '',
      mileage: '',
      registration: '',
      gender: 'GESCHLECHT',
      fuel: 'KRAFTSTOFF',
      state: 'AKTUELLER ZUSTAND',
      equipment: '',
    },
    onSubmit: values => {
      console.log('posted', values);
    },
    validationSchema: schema,
  });

  return (
    <>
      <form className='form' onSubmit={formik.handleSubmit}>
        <div>
          <h4>Personliche Daten</h4>
          <input
            required
            className='form-field'
            placeholder='VORNAME'
            name='name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            required
            className='form-field'
            placeholder='NACHNAME'
            name='lastname'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <select required onChange={formik.handleChange} name='gender'>
            <option value='FRAU'>FRAU</option>
            <option value='HERR'>HERR</option>
          </select>
          <input
            required
            className='form-field'
            placeholder='STRASSE/NR.'
            type='text'
            name='street'
            onChange={formik.handleChange}
          />
          <input
            required
            className='form-field'
            placeholder='PLZ'
            type='text'
            name='plz'
            onChange={formik.handleChange}
          />
          <input
            required
            className='form-field'
            placeholder='STADT'
            type='text'
            name='city'
            onChange={formik.handleChange}
          />
          <input
            required
            className='form-field'
            placeholder='FIRMA'
            type='text'
            name='company'
            onChange={formik.handleChange}
            value={formik.values.company}
          />
        </div>
        <div>
          <h4>Kontaktdaten</h4>
          <input
            required
            className='form-field'
            placeholder='E-MAIL'
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            required
            className='form-field'
            placeholder='MOBILNUMMER'
            type='text'
            name='telephone'
            onChange={formik.handleChange}
            value={formik.values.telephone}
          />
          <input
            required
            className='form-field'
            placeholder='FAX'
            type='text'
            name='fax'
            onChange={formik.handleChange}
          />
          <input
            required
            className='form-field'
            placeholder='TEL'
            type='text'
            name='phone'
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <h4>Fahzeugdaten</h4>
          <input
            required
            className='form-field'
            placeholder='MARKE'
            type='text'
            name='make'
            onChange={formik.handleChange}
          />
          <input
            required
            className='form-field'
            placeholder='MODELL'
            type='text'
            name='model'
            onChange={formik.handleChange}
          />
          <input
            required
            className='form-field'
            placeholder='PREISVORSTELLUNG'
            type='text'
            name='suggestion'
            onChange={formik.handleChange}
          />
          <select required onChange={formik.handleChange} name='fuel'>
            <option value='Benzin'>Bezin</option>
            <option value='Diesel'>Diesel</option>
            <option value='Elektro'>Elektro</option>
            <option value='Gas'>Gas</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
          <input
            className='form-field'
            placeholder='KILOMETERSTAND'
            type='text'
            name='mileage'
            onChange={formik.handleChange}
          />
          <select required onChange={formik.handleChange} name='state'>
            <option value='NEUWERTIG'>NEUWERTIG</option>
            <option value='ALTERSBEDINGTE ABNUTZUNG'>
              ALTERSBEDINGTE ABNUTZUNG
            </option>
            <option value='KLEINERE SCHÄDE'>KLEINERE SCHÄDE</option>
            <option value='STARK BESCHÄDIGT'>STARK BESCHÄDIGT</option>
            <option value='UNFALLFAHRZEUG'>UNFALLFAHRZEUG</option>
          </select>
          <input
            required
            className='form-field'
            placeholder='EZ DES FAHRZEUGS'
            type='text'
            name='registration'
            onChange={formik.handleChange}
          />
          <textarea
            required
            className='form-field larger'
            placeholder='SONDERAUSSTATTUNGEN'
            type='text'
            name='equipment'
            onChange={formik.handleChange}
          />
        </div>
      </form>
      <br />
      <div>
        <h6>Fahrzeugbilder</h6>
        <DropzoneElement />
      </div>
      <div className='end'>
        <button type='submit' className='btn'>
          <svg
            width='180px'
            height='60px'
            viewBox='0 0 180 60'
            className='border'
          >
            <polyline
              points='179,1 179,59 1,59 1,1 179,1'
              className='bg-line'
            />
            <polyline
              points='179,1 179,59 1,59 1,1 179,1'
              className='hl-line'
            />
          </svg>
          <span>SENDEN</span>
        </button>
      </div>
    </>
  );
};

export default ContactForm;
