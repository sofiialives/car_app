import React from "react";
import { DescrLi, DescrList } from "./Description.styled";

const Description = ({ array, secondArray, isCondition }) => {
  return (
    <div>
      <DescrList isCondition={isCondition}>
        {array.map((item, index) => (
          <DescrLi key={index} isCondition={isCondition}>
            <span>{item}</span>
          </DescrLi>
        ))}
      </DescrList>
      <DescrList isCondition={isCondition}>
        {secondArray.map((item, index) => (
          <DescrLi key={index} isCondition={isCondition}>
            <span>{item}</span>
          </DescrLi>
        ))}
      </DescrList>
    </div>
  );
};

export default Description;
