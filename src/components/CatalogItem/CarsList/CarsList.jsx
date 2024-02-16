import React from "react";
import { CarsListStyled } from "./CarsList.styled";

const CarsList = ({ car}) => {
  return (
    <CarsListStyled>
      <li className="item">
        <p className="text">
          {car.make} <span className="span">{car.model}</span>, {car.year}
        </p>
      </li>
      <li>
        <p className="text">{car.rentalPrice}</p>
      </li>
    </CarsListStyled>
  );
};

export default CarsList;
