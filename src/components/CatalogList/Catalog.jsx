import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../services/cars/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "./Catalog.styled";

const Catalog = () => {
  const cars = useSelector(selectCars);
  const [newCars, setNewCars] = useState([]);

  useEffect(() => {
    setNewCars((prev) => [...prev, ...cars]);
  }, [cars]);

  return (
    <CatalogList>
      {newCars.map((car) => (
        <CatalogItem key={car.id} car={car} />
      ))}
    </CatalogList>
  );
};

export default Catalog;
