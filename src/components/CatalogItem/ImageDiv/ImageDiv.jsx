import React from "react";
import Icon from "../../Icon";
import { ImageDivStyled } from "./ImageDiv.styled";

const ImageDiv = ({ img }) => {
  return (
    <ImageDivStyled>
      <Icon className="heart-icon" id="heart" />
      <img src={img} alt="name" className="image" />
    </ImageDivStyled>
  );
};

export default ImageDiv;
