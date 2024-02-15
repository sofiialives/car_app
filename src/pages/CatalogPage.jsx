import React, { useEffect } from "react";
import Catalog from "../components/Catalog/Catalog";
import { useDispatch } from "react-redux";
import { getCars } from "../services/cars/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <Catalog />
    </>
  );
};

export default CatalogPage;
