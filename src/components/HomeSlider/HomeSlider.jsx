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
      className="slick-next-home-slider"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-prev-home-slider"
      onClick={onClick}
    />
  );
}

class HomeSlider extends Component {
  state = {
    display: true,
    width: 270
  }
  render () {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };
  

  return (
<div className="mka__home-page-slider">
      <Slider {...settings}>
        <div>
       <Card/>
       </div>
       <div>
       <Card/>
       </div>
       <div>
       <Card/>
       </div>
       <div>
       <Card/>
       </div>
       <div>
       <Card/>
       </div>
       <div>
       <Card/>
       </div>
      </Slider>
      </div>

  );
}
}

export default HomeSlider