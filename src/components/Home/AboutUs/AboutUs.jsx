import React from "react";
import Advantage from "./Advantage/Advantage";
import Benefit from "./Benefit/Benefit";

const AboutUs = () => {
  return (
    <div style={{ display: "flex" }} className="section">
      <Advantage />
      <Benefit />
    </div>
  );
};

export default AboutUs;
