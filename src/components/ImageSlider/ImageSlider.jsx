import { Component } from "react"
import Slider from "react-slick"
import "./ImageSlider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-next"
      onClick={onClick}
    />
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-prev"
      onClick={onClick}
    />
  )
}

class ImageSlider extends Component {
  render () {
  const settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <div className="dot">{i + 1}</div>;
    },
    dotsClass: "slick-dots slick-thumb"
  }
  
  return (
    <div className="mka__main-gallery-div">
      <Slider {...settings}>
        <div>
        <img src={require("../../assets/1.jpg")} alt="gallery-image_1" />
        </div>
        <div>
        <img src={require("../../assets/2.jpg")} alt="gallery-image_2"/>
        </div>
        <div>
        <img src={require("../../assets/3.jpg")} alt="gallery-image_3"/>
        </div>
        <div>
        <img src={require("../../assets/4.jpg")} alt="gallery-image_4"/>
        </div>
        <div>
        <img src={require("../../assets/5.jpg")} alt="gallery-image_5"/>
        </div>
        <div>
        <img src={require("../../assets/6.jpg")} alt="gallery-image_6"/>
        </div>
        <div>
        <img src={require("../../assets/7.jpg")} alt="gallery-image_7"/>
        </div>
        <div>
        <img src={require("../../assets/8.jpg")} alt="gallery-image_8"/>
        </div>
        <div>
        <img src={require("../../assets/9.jpg")} alt="gallery-image_9"/>
        </div>
        <div>
        <img src={require("../../assets/10.jpg")} alt="gallery-image_10"/>
        </div>
      </Slider>
    </div>
  )
}
}

export default ImageSlider