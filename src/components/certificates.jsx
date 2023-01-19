import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nie from "../images/nielit.jpg";
import pkt from "../images/pkt.png";
import sainya from "../images/sainya.jpg";
import cs from "../images/cs.png";

const Certificates = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider settings={settings}>
      <img src={nie} alt="Nielit" />
      <img src={pkt} alt="packet tracer" />
      <img src={sainya} alt="Sainya" />
      <img src={cs} alt="cyber security" />
    </Slider>
  );
};

export default Certificates;
