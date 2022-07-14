import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  Copyright,
} from "../components"

const Datenschutz = () => {
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
            <h1>DATENSCHUTZ</h1>
          </div>
        </div>
      </div>
      <Copyright />
      <Jumbotrone />
    </>
  )
}

export default Datenschutz;
