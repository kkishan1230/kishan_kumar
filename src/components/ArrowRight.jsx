import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const ArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <AiFillCaretRight className="arrows" />
    </div>
  );
};

export default ArrowRight;
