import React from "react";
import ImageDiv from "./ImageDiv/ImageDiv";
import CarsList from "./CarsList/CarsList";
import { StyledButton } from "./CatalogItem.styled";

const CatalogItem = ({
  id,
  img,
  year,
  make,
  model,
  rentalPrice,
  type,
  rentalCompany,
  address,
}) => {
  return (
    <li>
      <ImageDiv img={img} />
      <CarsList
        year={year}
        make={make}
        model={model}
        rentalPrice={rentalPrice}
      />
      <StyledButton type="button">Learn more</StyledButton>
    </li>
  );
};

export default CatalogItem;
