import React from "react";
import { marks } from "../utils/catalogFilter";

const CatalogFilter = ({ setMarks }) => {
  const makeOptions = marks.map((car, index) => (
    <option key={index} value={car}>
      {car}
    </option>
  ));

  const handleSearch = (e) => {
    e.preventDefault();
    const selectedMake = e.target.elements.make.value;
    setMarks(selectedMake);
  };
  return (
    <form onSubmit={handleSearch}>
      <label>
        Car brand
        <select name="make">{makeOptions}</select>
      </label>
      {/* <label>
        Price/ 1 hour
        <select>
          <option value="">To </option>
        </select>
      </label>
      <label>
        Сar mileage / km
        <input type="text" />
        <input type="text" />
      </label> */}
      <button type="submit">Search</button>
    </form>
  );
};

export default CatalogFilter;
