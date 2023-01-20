import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nie from "../images/nielit.jpg";
import sainya from "../images/sainya.jpg";
import cs from "../images/cs.png";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const Certificates = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <div>
      <h2 className="text-[#7286D3] text-3xl underline">Certifications</h2>
      <div className="flex">
        <div className="w-[30%]">This is heading</div>
        <Slider {...settings} className="text-center">
          <div>
            <h3 className="carousel-heading">
              Participated in INDIAN ARMY HACKATHON. Organised by ISAC and
              Indian Army & reached to Third Level (final Level).
            </h3>
            <img src={sainya} className="carousel-img" alt="Sainya" />
          </div>
          <div>
            <h3 className="carousel-heading">
              Got Certificate from CISCO in march 2021 in Introduction to
              Cybersecurity.
            </h3>
            <img src={cs} className="carousel-img" alt="cyber security" />
          </div>
          <div>
            <h3 className="carousel-heading">
              Completed 8 week Ethical Hacking and Cyber Law organised by NIELIT
              from 14.06.2021 to 06.08.2021.{" "}
            </h3>
            <img src={nie} className="carousel-img" alt="nielit" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Certificates;
