import React from "react";
import { LoadMoreBtn } from "./LoadMore.styled";

const LoadMore = ({ handleClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={handleClick}>
      Load More
    </LoadMoreBtn>
  );
};

export default LoadMore;
