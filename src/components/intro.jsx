import React from "react";
import pro_img from "../images/user.png";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Intro = () => {
  return (
    <div className="caveat flex  mt-[120px]">
      <div className=" w-[50%] flex flex-col justify-between">
        <h2 className="text-5xl opacity-50">Hi, It's me,</h2>
        <div>
          <h1 className="text-7xl">Kishan Kumar !</h1>
          <h2 className="text-4xl opacity-50">
            WEB DEVELOPER & WEB SECURITY RESEARCHER..
          </h2>
        </div>
        <p className="text-3xl">
          An enthusiastic web designer. Currently sharpaning my own skills in
          ReactJs and NextJs.
        </p>
      </div>
      <div className="w-[50%]">
        <div className="w-[50%] mx-auto opacity-80">
          <img className="rounded-full" src={pro_img} alt="profile_picture" />
          <div className="social flex justify-between items-center mt-5">
            <div>
              <AiFillFacebook className="icon" />
            </div>
            <div>
              <AiFillInstagram className="icon" />
            </div>
            <div>
              <AiFillTwitterSquare className="icon" />
            </div>
            <div>
              <AiFillLinkedin className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
