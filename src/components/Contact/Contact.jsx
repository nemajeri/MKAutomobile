import './Contact.css';

function Contact() {
  return (
    <div className='mka__container-contact'>
      <div className='mka__content-contact'>
      <div className='mka__contact-infos-container'>
        <div className='mka__contact-infos-card'>
          <div className='mka__contact-infos-circle'></div>
          <h5>ADRESSE</h5>
          <div className='mka__contact-infos-divider'></div>
          <p className='mka__contact-infos-description'>
          Im Trenkenschuh 15-17
          2100 Korneuburg
          </p>
        </div>
        <div className='mka__contact-infos-card'>
          <div className='mka__contact-infos-circle'></div>
          <h5>TELEFON</h5>
          <div className='mka__contact-infos-divider'></div>
          <p className='mka__contact-infos-description'>
          +43 680 3149332
          +43 2262 20413
          </p>
        </div>
        <div className='mka__contact-infos-card'>
          <div className='mka__contact-infos-circle'></div>
          <h5>EMAIL</h5>
          <div className='mka__contact-infos-divider'></div>
          <p className='mka__contact-infos-description'>
          office@mkautomobile.at
          </p>
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
      </div>
    </div>
    </div>
  );
}

export default Contact;