import React, { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "../CatalogList/Catalog.styled";

const FavoriteList = () => {
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const removeFavorite = (id) => {
    setFavorite((prev) => prev.filter((item) => item.id !== id));
  };

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
