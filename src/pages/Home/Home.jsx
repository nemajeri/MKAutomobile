import './Home.css';
import {Header, Navbar, Footer, Jumbotrone, Logo} from '../../components'

function Home() {
  return (
    <div>
      <div id='home-img-id' className='home-img-div'>
         <Header/>
          <Navbar />
          <div className='mka__logo-img'>
            <div className='mka__logo-size'>
            <Logo/>
            </div>
            </div>
            <h2 id="mka__home-subtitle">HERZLICH WILLKOMMEN</h2>
            <p id="mka__home-description">Probefahrt und Besichtigung sind ausschließlich nach Terminvereinbarung möglich</p>
          <div className='mka__title-wrapper'>
          <div className='mka__container'>
          </div>
          </div>
          </div>
    <Jumbotrone/>
      <Footer/>
    </div>
  );
}

export default Home;