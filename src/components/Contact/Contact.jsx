import './Contact.css';
import ContactForm from '../forms/ContactForm';
import React from 'react';
import ContactLinks from './ContactLinks';
import OpeningTimes from './OpeningTimes';

const Contact = () => {
  const contacts = [
    {
      title: 'ADRESSE',
      description: 'Im Trenkenschuh 15-17 \n 2100 Korneuburg',
    },
    { title: 'TELEFON', description: '+43 680 3149332 \n +43 2262 20413' },
    { title: 'Email', description: 'office@mkautomobile.at' },
  ];
  return (
    <div className='mka__wrapper contact'>
      <div className='mka__container'>
        <div className='mka__content-contact'>
          <div className='mka__contact-infos-container'>
            {contacts.map((contact, index) => (
              <ContactLinks contact={contact} index={index} />
            ))}
          </div>
          <ContactForm />
          <div className='mka__google-api-contact'>
            <div className='mka__google-api-container'>
              <iframe
                title='Google maps'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2651.6948709379444!2d16.3221874!3d48.34717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0e3bfb300989%3A0x729d0e5fe5bbceee!2sIm%20Trenkenschuh%2015-17%2C%202100%20Korneuburg%2C%20%C3%96sterreich!5e0!3m2!1sde!2sba!4v1628134320122!5m2!1sde!2sba'
                width={'100%'}
                height={450}
              ></iframe>
            </div>
            <OpeningTimes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
