import React from "react";
import icons from "../components/Icon";

const Icon = ({ className, id }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;

