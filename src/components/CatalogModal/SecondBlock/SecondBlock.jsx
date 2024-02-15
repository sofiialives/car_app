import React from "react";
import Description from "../../Description/Description";

const SecondBlock = ({ title, array, secondArray, isTrue }) => {
  return (
    <div className="second-block">
      <h3>{title}</h3>
      <Description
        array={array}
        secondArray={secondArray}
        isCondition={isTrue}
      />
    </div>
  );
};

export default SecondBlock;
