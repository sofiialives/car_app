import React from "react";
import { LoadMoreBtn } from "./LoadMore.styled";
import { useSelector } from "react-redux";
import { selectIsLoading } from "services/cars/selectors";

const LoadMore = ({ handleClick }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <LoadMoreBtn type="button" onClick={handleClick}>
      {isLoading ? "Loading..." : "Load More"}
    </LoadMoreBtn>
  );
};

export default LoadMore;
