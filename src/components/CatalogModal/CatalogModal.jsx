import React from "react";
import { ModalSection, RentalBtn } from "./CatalogModal.styled";

const CatalogModal = ({
  id,
  img,
  year,
  make,
  model,
  rentalPrice,
  type,
  rentalCompany,
  address,
  description,
}) => {
  return (
    <ModalSection>
      <img src={img} alt={make} className="image" />
      <div>
        <h2 className="text">
          {make} <span className="span">{model}</span>, {year}
        </h2>
        <p>{description}</p>
      </div>
      <div>
        <h3>Accessories and functionalities:</h3>
      </div>
      <div>
        <h3>Rental Conditions: </h3>
      </div>
      <RentalBtn type="button">Rental car</RentalBtn>
    </ModalSection>
  );
};

export default CatalogModal;
