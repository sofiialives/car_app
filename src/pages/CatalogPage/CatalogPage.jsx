// CatalogPage.jsx
import React, { useEffect, useState } from "react";
import Catalog from "../../components/CatalogList/Catalog";
import { useDispatch } from "react-redux";
import { getCars } from "../../services/cars/operations";
import LoadMore from "../../components/LoadMore/LoadMore";
import { CatalogWrapper } from "./CatalogPage.styled";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);

  return (
    <CatalogWrapper className="main-container">
      <Catalog />
      <LoadMore handleClick={handleClick} />
    </CatalogWrapper>
  );
};

export default CatalogPage;
