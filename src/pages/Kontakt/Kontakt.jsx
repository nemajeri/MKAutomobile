import "./Kontakt.css"
import {
  Header,
  Navbar,
  Footer,
  Jumbotrone,
  Logo,
  Contact,
} from "../../components"

const Kontakt = () => {
  return (
    <>
      <div id="contact-img-id" className="contact-img-div">
        <Header />
        <Navbar />
        <div className="mka__logo-img">
          <div className="mka__logo-size">
            <Logo />
          </div>
        </div>
        <p id="mka__contact-description">
          Probefahrt und Besichtigung sind ausschließlich nach
          Terminvereinbarung möglich
        </p>
        <div className="mka__title-wrapper">
          <div className="mka__container">
            <h1 id="mka__contact-title">KONTAKT</h1>
          </div>
        </div>
      </div>
      <Contact />
      <Jumbotrone />
      <Footer />
    </>
  )
}

export default Kontakt