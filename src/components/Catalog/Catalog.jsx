import React from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../services/cars/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "./Catalog.styled";

const Catalog = () => {
  const cars = useSelector(selectCars);

  return (
    <section className="main-container">
      <CatalogList>
        {cars.map((car) => (
          <CatalogItem car={car} />
        ))}
      </CatalogList>
    </section>
  );
};

export default Catalog;
