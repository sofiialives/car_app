import React from "react";
import { CarsListStyled } from "./CarsList.styled";

const CarsList = ({ car }) => {
  return (
    <CarsListStyled>
      <p className="text item">
        {car.make} <span className="span">{car.model}</span>, {car.year}
      </p>
      <p className="text">{car.rentalPrice}</p>
    </CarsListStyled>
  );
};

export default CarsList;
