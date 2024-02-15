import React from "react";
import { CarsListStyled } from "./CarsList.styled";

const CarsList = ({ year, make, model, rentalPrice }) => {
  return (
    <div>
      <CarsListStyled>
        <li className="item">
          <p className="text">
            {make} <span className="span">{model}</span>, {year}
          </p>
        </li>
        <li>
          <p className="text">{rentalPrice}</p>
        </li>
      </CarsListStyled>
    </div>
  );
};

export default CarsList;
