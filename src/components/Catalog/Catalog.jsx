import React from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../services/cars/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { CatalogList } from "./Catalog.styled";

const Catalog = () => {
  const cars = useSelector(selectCars);

  return (
    <section className="main-container">
      <CatalogList>
        {cars.map(
          ({
            id,
            img,
            year,
            make,
            model,
            rentalPrice,
            type,
            rentalCompany,
            address,
            description
          }) => (
            <CatalogItem
              key={id}
              img={img}
              year={year}
              make={make}
              model={model}
              rentalCompany={rentalCompany}
              rentalPrice={rentalPrice}
              type={type}
              address={address}
              description={description}
            />
          )
        )}
      </CatalogList>
    </section>
  );
};

export default Catalog;
