import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../services/cars/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "./Catalog.styled";

const Catalog = () => {
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) ?? []
  );
  const cars = useSelector(selectCars);
  const [newCars, setNewCars] = useState([]);

  useEffect(() => {
    setNewCars((prev) => [...prev, ...cars]);
  }, [cars]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (id) => {
    const carToAdd = newCars.find((car) => car.id === id);
    if (carToAdd) {
      setFavorite((prevFavorite) => [...prevFavorite, carToAdd]);
    }
  };
  
  const removeFavorite = (id) => {
    setFavorite((prev) => prev.filter((item) => item.id !== id));
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
