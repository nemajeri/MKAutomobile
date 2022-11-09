import React from 'react';
import { useFormik } from 'formik';
import Button from '../utils/Button';
import * as yup from 'yup';

const ContactForm = () => {
  const phoneRegExp = /^\+4[139] \(0\d+\) \d{9,}$/;

  let schema = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().matches(phoneRegExp).required(),
    company: yup.string().required(),
    message: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      telephone: '',
      company: '',
      message: '',
    },
    onSubmit: values => {
      console.log('posted', values);
    },
    validationSchema: schema,
  });

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div>
        <input
          className='form-field'
          placeholder='VORNAME'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          className='form-field'
          placeholder='NACHNAME'
          name='lastname'
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
      </div>
      <div>
        <input
          className='form-field'
          placeholder='E-MAIL'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          className='form-field'
          placeholder='TEL'
          name='telephone'
          onChange={formik.handleChange}
          value={formik.values.telephone}
        />
      </div>
      <div>
        <input
          className='form-field'
          placeholder='FIRMA'
          name='company'
          onChange={formik.handleChange}
          value={formik.values.company}
        />
        <input
          className='form-field'
          placeholder='IHRE NACHRICHT'
          name='message'
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </div>
      <div className='center'>
        <Button />
      </div>
    </form>
  );
};

export default ContactForm;
