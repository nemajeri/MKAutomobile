import React from 'react';
import { IconContext } from 'react-icons';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const icons = [FaMapMarkerAlt, FaPhoneAlt, FaEnvelope];

const ContactLinks = ({ contact, index }) => {
  const Icon = icons[index];

  return (
    <div className='mka__contact-infos-card'>
      <div className='mka__contact-infos-circle'>
        <IconContext.Provider value={{ className: 'mka__icon-color' }}>
          <Icon />
        </IconContext.Provider>
      </div>
      <h6>{contact.title}</h6>
      <div className='mka__contact-infos-divider'></div>
      <p className='mka__contact-infos-description'>{contact.description}</p>
    </div>
  );
};

export default ContactLinks;
