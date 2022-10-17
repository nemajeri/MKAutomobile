import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ContactPageLink = () => {
  return (
    <div className='mka__shortcut-home-list'>
      <IconContext.Provider value={{ className: 'mka__icon-size' }}>
        <a href='/kontakt'>
          <i>
            <FaCommentDots />
          </i>
        </a>
      </IconContext.Provider>
      <a href='/kontakt'>KONTAKT</a>
    </div>
  );
};

export default ContactPageLink;
