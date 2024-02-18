import React, { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "./Catalog.styled";
import { useFavorite } from "../../utils/useFavorite";

const Catalog = ({ query, cars }) => {
  const [newCars, setNewCars] = useState([]);

  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];
  const { favorite, removeFavorite, setFavorite } =
    useFavorite(initialFavorite);

  useEffect(() => {
    if (query === "All" || !query) {
      setNewCars(cars || []);
    } else {
      const filteredCars = cars.filter(({ make }) =>
        make.toLowerCase().includes(query.toLowerCase())
      );
      setNewCars(filteredCars);
    }
  }, [cars, query]);

  const addFavorite = (id) => {
    const carToAdd = newCars.find((car) => car.id === id);
    if (carToAdd) {
      setFavorite((prevFavorite) => [...prevFavorite, carToAdd]);
    }
  };

  const isFavorite = (id) => favorite.some((item) => item.id === id);
  return (
    <CatalogList>
      {newCars.map((car) => (
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
