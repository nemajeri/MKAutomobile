import './Kontakt.css';
import {Header, Navbar, Footer, Jumbotrone, Logo, Contact} from '../../components'

function Kontakt() {
  return (
    <div>
    <div id='contact-img-id' className='contact-img-div'>
       <Header/>
        <Navbar />
        <div className='mka__logo-img'>
          <div className='mka__logo-size'>
          <Logo/>
          </div>
          </div>
          <p id="mka__contact-description">Probefahrt und Besichtigung sind ausschließlich nach Terminvereinbarung möglich</p>
        <div className='mka__title-wrapper'>
        <div className='mka__wrapper-contact'>
        <div className='mka__container'>
        <h1 id='mka__contact-title'>KONTAKT</h1>
        <Contact/>
        </div>
        </div>
        </div>
        </div>
  <Jumbotrone/>
    <Footer/>
  </div>
    );
  }

export default Kontakt;