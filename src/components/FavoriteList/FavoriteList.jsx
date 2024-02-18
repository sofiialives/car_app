import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList, ImageEmtry } from "../CatalogList/Catalog.styled";
import { useFavorite } from "../../utils/useFavorite";
import { useSelector } from "react-redux";
import { selectIsLoading } from "services/cars/selectors";
import Loader from "components/Loader/Loader";
import empty from "../../assets/images/emtry.png";

const FavoriteList = () => {
  const isLoading = useSelector(selectIsLoading);
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];

  const { favorite, removeFavorite } = useFavorite(initialFavorite);

  const isFavorite = (id) => favorite.some((item) => item.id === id);
  return (
    <CatalogList className="section">
      {isLoading && <Loader />}
      {favorite?.length > 0 ? (
        favorite.map((item) => (
          <CatalogItem
            key={item.id}
            car={item}
            isFav={isFavorite(item.id)}
            remove={removeFavorite}
          />
        ))
      ) : (
        <ImageEmtry src={empty} alt="empty" width={300} />
      )}
    </CatalogList>
  );
};

export default FavoriteList;
