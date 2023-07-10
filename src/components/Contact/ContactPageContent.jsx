import './Contact.css';
import ContactForm from '../forms/ContactForm';
import React from 'react';
import ContactLinks from './ContactLinks';
import OpeningTimes from './OpeningTimes';

const ContactPageContent = () => {
  const contacts = [
    {
      title: 'ADRESSE',
      description: 'Im Trenkenschuh 15-17 \n 2100 Korneuburg',
    },
    {
      title: 'TELEFON',
      description: '+43 680 3149332 \n +43 2262 20413',
    },
    {
      title: 'Email',
      description: 'office@mkautomobile.at',
    },
  ];

  return (
    <div className='mka__wrapper contact'>
      <div className='mka__container'>
        <div className='mka__content-contact'>
          <div className='mka__contact-infos-container'>
            {contacts.map((contact, index) => (
              <ContactLinks contact={contact} key={index} index={index} />
            ))}
          </div>
          <ContactForm />
          <div className='mka__google-api-contact'>
            <div className='mka__google-api-container'>
              <iframe
                title='Google maps'
                src={process.env.REACT_APP_GOOGLE_MAPS_URL}
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

export default ContactPageContent;
