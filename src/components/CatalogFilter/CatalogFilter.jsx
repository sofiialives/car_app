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
    localStorage.setItem("selector", selectedMake);
  };

  const priceOptions = Array.from({ length: 80 }, (_, index) => (
    <option key={index} value={(index + 1) * 10} className="car-option">
      {((index + 1) * 10).toString()}
    </option>
  ));

  return (
    <FormStyled onSubmit={handleSearch}>
      <LabelStyled>
        <p>Car brand</p>
        <SelectorStyled
          name="make"
          defaultValue={localStorage.getItem("selector") || ""}
        >
          <option className="car-option" disabled selected>
            Enter the text
          </option>
          {makeOptions}
        </SelectorStyled>
      </LabelStyled>
      <LabelStyled>
        <p>Price / 1 hour</p>
        <SelectorStyled>
          <option className="car-option" disabled selected>
            To $
          </option>
          {priceOptions}
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
