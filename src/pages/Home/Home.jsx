import "./Home.css";
import {
  Header,
  Navbar,
  Jumbotrone,
  Logo,
  HomePageCarList,
} from "../../components";

const Home = () => {
  return (
    <>
      <div id="home-img-id" className="home-img-div">
        <Header />
        <Navbar />
        <div className="mka__logo-img">
          <div className="mka__logo-size">
            <Logo />
          </div>
        </div>
        <h2 id="mka__home-subtitle">HERZLICH WILLKOMMEN</h2>
        <div className="mka__container">
          <div className="mka__container car-aligment">
          <img
            id="bmw-min"
            className="mka__car-img"
            src={require("../../assets/bmw-min.png")}
            alt="bmw-min"
          />
            <img
            id="mercedes-min"
            className="mka__car-img"
            src={require("../../assets/mercedes-min.png")}
            alt="mercedes-min"
          />
          </div>
        <p id="mka__home-description">
          Probefahrt und Besichtigung sind ausschließlich nach
          Terminvereinbarung möglich
        </p>
        </div>
      </div>
      <HomePageCarList />
      <Jumbotrone />
    </>
  )
}

export default Home;
