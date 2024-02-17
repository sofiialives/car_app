import React, { useEffect, useState } from "react";
import Catalog from "../../components/CatalogList/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../services/cars/operations";
import LoadMore from "../../components/LoadMore/LoadMore";
import { CatalogWrapper } from "./CatalogPage.styled";
import { selectCars } from "../../services/cars/selectors";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const [marks, setMarks] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleMarks = (selected) => {
    const filtered = cars?.filter((item) => item.make === selected);
    setMarks(filtered);
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);

  const endPage = cars.length > 0;
  return (
    <CatalogWrapper className="main-container">
      <CatalogFilter handleMarks={handleMarks} />
      <Catalog cars={marks} />
      {endPage && <LoadMore handleClick={handleClick} />}
    </CatalogWrapper>
  );
};

export default CatalogPage;
