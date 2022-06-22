import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { IconContext } from "react-icons";

function Contact() {
  return (
    <div className='mka__wrapper-contact'>
    <div className='mka__container-contact'>
      <div className='mka__content-contact'>
      <div className='mka__contact-infos-container'>
        <div className='mka__contact-infos-card'>
          <div className='mka__contact-infos-circle'><IconContext.Provider value={{ className: "mka__icon-color"}}><FaMapMarkerAlt /></IconContext.Provider></div>
          <h6>ADRESSE</h6>
          <div className='mka__contact-infos-divider'></div>
          <p className='mka__contact-infos-description'>
          Im Trenkenschuh 15-17<br/>
          2100 Korneuburg
          </p>
        </div>
        <div className='mka__contact-infos-card'>
          <div className='mka__contact-infos-circle'><IconContext.Provider value={{ className: "mka__icon-color"}}><FaPhoneAlt /></IconContext.Provider></div>
          <h6>TELEFON</h6>
          <div className='mka__contact-infos-divider'></div>
          <p className='mka__contact-infos-description'>
          +43 680 3149332<br/>
          +43 2262 20413
          </p>
        </div>
        <div className='mka__contact-infos-card'>
          <div className='mka__contact-infos-circle'><IconContext.Provider value={{ className: "mka__icon-color"}}><FaEnvelope /></IconContext.Provider></div>
          <h6>EMAIL</h6>
          <div className='mka__contact-infos-divider'></div>
          <p className='mka__contact-infos-description'>
          office@mkautomobile.at
          </p>
        </div>
        </div>
        <div className='mka__forms-purchase'>
        <div className='mka__form-design'>
        <form>
        <label>
          <input type="text" value="VORNAME"/>
          <input type="text" value="TEL"/>
          </label>
        </form>
        </div>
        <div className='mka__form-design'>
        <form>
        <label>
          <input type="text" value="NACHNAME"/>
          <input type="text" value="FIRMA"/>
          </label>
        </form>
        </div>
        <div className='mka__form-design'>
        <form>
        <label>
          <input type="text" value="E-MAIL"/>
          <input type="text" value="IHRE NACHRICHT"/>
          </label>
        </form>
        </div>
        </div>
        <button type='submit' className='mka__form-button'>SENDEN</button>
        <div className='mka__google-api-contact'>
        <iframe title='Google maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2651.6948709379444!2d16.3221874!3d48.34717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0e3bfb300989%3A0x729d0e5fe5bbceee!2sIm%20Trenkenschuh%2015-17%2C%202100%20Korneuburg%2C%20%C3%96sterreich!5e0!3m2!1sde!2sba!4v1628134320122!5m2!1sde!2sba" width={300} height={150}></iframe>
          <div className='mka__openning-times-contact'>
          <h5>ÖFFNUNGSZEITEN</h5>
          <p>Montag 10:00h - 18:00h</p>
          <p>Dienstag 10:00h - 18:00h</p>
          <p>Mittwoch 10:00h - 18:00h</p>
          <p>Donnerstag 10:00h - 18:00h</p>
          <p>Freitag 10:00h - 18:00h</p>
          <p>Samstag 10:00h - 12:00h</p>
          <p>Sonntag Geschlossen</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;