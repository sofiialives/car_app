// Catalog.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../services/cars/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "./Catalog.styled";
import { useFavorite } from "../../utils/useFavorite";

const Catalog = ({ query }) => {
  const cars = useSelector(selectCars);
  const [newCars, setNewCars] = useState([]);

  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];
  const { favorite, removeFavorite, setFavorite } =
    useFavorite(initialFavorite);

  useEffect(() => {
    setNewCars((prev) => [...prev, ...cars]);
  }, [cars]);

  const addFavorite = (id) => {
    const carToAdd = newCars.find((car) => car.id === id);
    if (carToAdd) {
      setFavorite((prevFavorite) => [...prevFavorite, carToAdd]);
    }
  };

  const filteredCars = useMemo(() => {
    if (query === "") return newCars;

    return newCars.filter(({ make }) =>
      make.toLowerCase().includes(query.toLowerCase())
    );
  }, [newCars, query]);

  const isFavorite = (id) => favorite.some((item) => item.id === id);

  return (
    <CatalogList>
      {filteredCars.map((car) => (
        <CatalogItem
          key={car.id}
          car={car}
          add={addFavorite}
          isFav={isFavorite(car.id)}
          remove={removeFavorite}
        />
      ))}
    </CatalogList>
  );
};

export default Catalog;
