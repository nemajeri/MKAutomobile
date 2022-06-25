import './Fahrzeugangebote.css'
import {
  Header,
  Navbar,
  Footer,
  Jumbotrone,
  Logo,
  CarOffers
} from "../../components"

const Fahrzeugangebote = () => {
  return (
    <>
      <div id="header-img-id" className="header-img-div">
        <Header />
        <Navbar />
        <div className="mka__logo-img">
          <div className="mka__logo-size">
            <Logo />
          </div>
        </div>
        <div className="mka__title-wrapper">
          <div className="mka__container">
            <h1>FAHRZEUGANGEBOTE</h1>
          </div>
        </div>
      </div>
      <CarOffers/>
      <Jumbotrone />
      <Footer />
    </>
  )
}

export default Fahrzeugangebote