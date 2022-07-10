import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  Impression,
} from "../../components"

const Impressum = () => {
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
            <h1>IMPRESSUM</h1>
          </div>
        </div>
      </div>
      <Impression />
      <Jumbotrone />
    </>
  )
}

export default Impressum
