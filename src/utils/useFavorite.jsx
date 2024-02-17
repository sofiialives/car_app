import { useEffect, useState } from "react";

export const useFavorite = (favCar) => {
  const [favorite, setFavorite] = useState(favCar);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const removeFavorite = (id) => {
    setFavorite((prev) => prev.filter((item) => item.id !== id));
  };

  return { favorite, removeFavorite, setFavorite };
};
