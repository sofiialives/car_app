import React from "react";
import { marks } from "../../utils/catalogFilter";
import {
  FormStyled,
  InputStyled,
  LabelStyled,
  SelectorStyled,
} from "./CatalogFilter.styled";

const CatalogFilter = ({ setQuery }) => {
  const makeOptions = marks.map((car, index) => (
    <option key={index} value={car} className="car-option">
      {car}
    </option>
  ));

  const handleSearch = (e) => {
    e.preventDefault();
    const selectedMake = e.target.make.value;
    setQuery(selectedMake);
  };
  return (
    <FormStyled onSubmit={handleSearch}>
      <LabelStyled>
        <p>Car brand</p>
        <SelectorStyled name="make">{makeOptions}</SelectorStyled>
      </LabelStyled>
      <LabelStyled>
        <p>Price/ 1 hour</p>
        <SelectorStyled className="input-no-border-radius">
          <option value="">To $</option>
        </SelectorStyled>
      </LabelStyled>
      <LabelStyled>
        <p>Car mileage / km</p>
        <InputStyled type="text" placeholder="From" />
        <InputStyled type="text" placeholder="To" className="input-left" />
      </LabelStyled>
      <button type="submit" className="button">
        Search
      </button>
    </FormStyled>
  );
};

export default CatalogFilter;
