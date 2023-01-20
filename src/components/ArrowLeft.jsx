import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const ArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <AiFillCaretLeft className="arrows" />
    </div>
  );
};

export default ArrowLeft;
