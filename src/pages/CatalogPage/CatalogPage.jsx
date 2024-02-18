import React, { useEffect, useState } from "react";
import Catalog from "../../components/CatalogList/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../services/cars/operations";
import LoadMore from "../../components/LoadMore/LoadMore";
import { CatalogWrapper } from "./CatalogPage.styled";
import { selectCars } from "../../services/cars/selectors";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";

const CatalogPage = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [query, setQuery] = useState(() => {
    return localStorage.getItem("query") || "";
  });
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (cars.length === 0 || query) {
      setLoadMore(false);
    } else {
      setLoadMore(true);
    }

    if (query === "All") {
      setLoadMore(true);
    }
  }, [cars, query]);

  useEffect(() => {
    const newQuery = query === "All" ? "" : query;
    localStorage.setItem("query", newQuery);
    dispatch(getCars({ query: newQuery, page }));
  }, [dispatch, page, query]);

  return (
    <CatalogWrapper className="main-container">
      <CatalogFilter setQuery={setQuery} />
      <Catalog query={query} cars={cars} />
      {loadMore && <LoadMore handleClick={handleClick} />}
    </CatalogWrapper>
  );
};

export default CatalogPage;
