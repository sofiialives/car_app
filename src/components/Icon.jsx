import React from "react";
import icons from "../assets/icons/icons.svg";

const Icon = ({ className, id }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
