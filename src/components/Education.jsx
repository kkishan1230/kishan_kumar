import React from "react";
import Degrees from "./degrees";

const Education = () => {
  return (
    <div>
      <h2 className="text-[#7286D3] text-3xl underline">Education</h2>
      <div className="flex justify-between">
        <Degrees
          type={"BACHELOR'S DEGREE"}
          school_college={"QUEST GROUP OF INSTITUTIONS"}
          session={"2014-2018"}
          marks={"77.5%"}
        />
        <Degrees
          type={"HIGHER SECONDARY EDUCATION"}
          school_college={"JAWAHAR NAVODAYA VIDYALAYA"}
          session={"2014"}
          marks={"79%"}
        />
        <Degrees
          type={"SECONDARY EDUCATION"}
          school_college={"JAWAHAR NAVODAYA VIDYALAYA"}
          session={"2012"}
          marks={"8.4 CGPA"}
        />
      </div>
    </div>
  );
};

export default Education;
