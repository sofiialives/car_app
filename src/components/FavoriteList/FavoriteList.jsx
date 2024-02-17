import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "../CatalogList/Catalog.styled";
import { useFavorite } from "../utils/useFavorite";

const FavoriteList = () => {
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];

  const { favorite, removeFavorite } = useFavorite(initialFavorite);

  const isFavorite = (id) => favorite.some((item) => item.id === id);
  return (
    <CatalogList>
      {favorite?.map((item) => (
        <CatalogItem
          key={item.id}
          car={item}
          isFav={isFavorite(item.id)}
          remove={removeFavorite}
        />
      ))}
    </CatalogList>
  );
};

export default FavoriteList;
