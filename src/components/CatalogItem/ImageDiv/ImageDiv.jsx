import React from "react";
import Icon from "../../Icon";
import { ImageDivStyled } from "./ImageDiv.styled";

const ImageDiv = ({ img, car, remove, add, isFav }) => {
  const handleClick = () => {
    if (isFav) {
      remove(car.id);
    } else add(car.id);
  };

  return (
    <ImageDivStyled>
      <button type="button" onClick={() => handleClick()}>
        <Icon className="heart-icon" id="heart" active={isFav} />
      </button>

      <img src={img} alt="name" className="image" />
    </ImageDivStyled>
  );
};

export default ImageDiv;
