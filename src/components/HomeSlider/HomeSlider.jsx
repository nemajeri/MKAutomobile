import React, { Component } from "react";
import Card from '../Card/Card'
import Slider from "react-slick";
import "./HomeSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-next"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-prev"
      onClick={onClick}
    />
  );
}

class ImageSlider extends Component {
  render () {
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  

  return (
    <div className="mka__main-gallery-div">
      <Slider {...settings}>
        <div className="mka__spacing-between-cards ">
       <Card/>
       </div>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </Slider>
    </div>
  );
}
}

export default ImageSlider