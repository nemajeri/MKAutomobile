import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ContactForm from './ContactForm';
import React from 'react';

const Contact = () => {
  return (
    <div className='mka__wrapper contact'>
      <div className='mka__container'>
        <div className='mka__content-contact'>
          <div className='mka__contact-infos-container'>
            {/* Za adresu, telefon i email napraviti jednu komponentu koja prima props */}
            <div className='mka__contact-infos-card'>
              <div className='mka__contact-infos-circle'>
                <IconContext.Provider value={{ className: 'mka__icon-color' }}>
                  <FaMapMarkerAlt />
                </IconContext.Provider>
              </div>
              <h6>ADRESSE</h6>
              <div className='mka__contact-infos-divider'></div>
              <p className='mka__contact-infos-description'>
                Im Trenkenschuh 15-17
                <br />
                2100 Korneuburg
              </p>
            </div>
            <div className='mka__contact-infos-card'>
              <div className='mka__contact-infos-circle'>
                <IconContext.Provider value={{ className: 'mka__icon-color' }}>
                  <FaPhoneAlt />
                </IconContext.Provider>
              </div>
              <h6>TELEFON</h6>
              <div className='mka__contact-infos-divider'></div>
              <p className='mka__contact-infos-description'>
                +43 680 3149332
                <br />
                +43 2262 20413
              </p>
            </div>
            <div className='mka__contact-infos-card'>
              <div className='mka__contact-infos-circle'>
                <IconContext.Provider value={{ className: 'mka__icon-color' }}>
                  <FaEnvelope />
                </IconContext.Provider>
              </div>
              <h6>EMAIL</h6>
              <div className='mka__contact-infos-divider'></div>
              <p className='mka__contact-infos-description'>
                office@mkautomobile.at
              </p>
            </div>
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
            {/* Dane otvaranja i vrijeme odvojiti u posebnu komponentu */}
            <div className='mka__opening-times-contact'>
              <h6>ÖFFNUNGSZEITEN</h6>
              <div className='mka__opening-times-divider'></div>
              <div className='mka__opening-times-text'>
                <div>
                  <p>
                    <strong>Montag</strong>
                  </p>
                  <p>
                    <strong>Dienstag</strong>
                  </p>
                  <p>
                    <strong>Mittwoch</strong>
                  </p>
                  <p>
                    <strong>Donnerstag </strong>
                  </p>
                  <p>
                    <strong>Freitag </strong>
                  </p>
                  <p>
                    <strong>Samstag</strong>
                  </p>
                  <p>
                    <strong>Sonntag</strong>
                  </p>
                </div>
                <div>
                  <p>10:00h - 18:00h</p>
                  <p>10:00h - 18:00h</p>
                  <p>10:00h - 18:00h</p>
                  <p>10:00h - 18:00h</p>
                  <p>10:00h - 18:00h</p>
                  <p>10:00h - 12:00h</p>
                  <p id='mka__text-red'>Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
