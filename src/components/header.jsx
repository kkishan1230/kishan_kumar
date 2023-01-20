import React from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="flex pt-5">
      <div className="logo w-12">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
