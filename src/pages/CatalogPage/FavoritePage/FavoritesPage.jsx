import React from "react";
import FavoriteList from "../../../components/FavoriteList/FavoriteList";
import { FavoriteTitle, StyledText } from "./FavoritePage.styled";

const FavoritesPage = () => {
  return (
    <section className="main-container">
      <FavoriteTitle>
        Welcome to your
        <StyledText> Favorite List</StyledText>
      </FavoriteTitle>
      <FavoriteList />
    </section>
  );
};

export default FavoritesPage;
