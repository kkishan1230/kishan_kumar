import React from "react";

const Degrees = ({ type, school_college, session, marks }) => {
  return (
    <div className="mt-8 w-1/3 ">
      <h2 className="text-3xl text-[#ffa857] underline">{type}</h2>
      <ul className="list-disc ml-5 text-xl mt-2">
        <li>{school_college}</li>
        <li>{session}</li>
        <li>{marks}</li>
      </ul>
    </div>
  );
};

export default Degrees;
