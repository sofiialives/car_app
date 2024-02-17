import React from "react";
import { DescrLi, DescrList } from "./Description.styled";

const Description = ({ array, isCondition }) => {
  return (
    <DescrList isCondition={isCondition}>
      {array.map((item, index) => (
        <DescrLi key={index} isCondition={isCondition}>
          <p>{item}</p>
        </DescrLi>
      ))}
    </DescrList>
  );
};

export default Description;
