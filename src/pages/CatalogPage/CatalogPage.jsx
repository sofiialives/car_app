import React, { useEffect, useState } from "react";
import Catalog from "../../components/CatalogList/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../services/cars/operations";
import LoadMore from "../../components/LoadMore/LoadMore";
import { CatalogWrapper } from "./CatalogPage.styled";
import { selectCars } from "../../services/cars/selectors";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";

const CatalogPage = () => {
  const [query, setQuery] = useState("");
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getCars({ query, page }));
  }, [dispatch, page, query]);

  const endPage = cars.length > 0;
  return (
    <CatalogWrapper className="main-container">
      <CatalogFilter setQuery={setQuery} />
      <Catalog query={query} />
      {endPage && <LoadMore handleClick={handleClick} />}
    </CatalogWrapper>
  );
};

export default CatalogPage;
