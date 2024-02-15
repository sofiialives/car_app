import React, { useState } from "react";
import ImageDiv from "./ImageDiv/ImageDiv";
import CarsList from "./CarsList/CarsList";
import { StyledButton } from "./CatalogItem.styled";
import Modal from "../Modal/Modal";
import CatalogModal from "../CatalogModal/CatalogModal";

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
  description,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <li>
      <ImageDiv img={img} />
      <CarsList
        year={year}
        make={make}
        model={model}
        rentalPrice={rentalPrice}
      />
      <StyledButton type="button" onClick={() => setVisible(true)}>
        Learn more
      </StyledButton>

      {visible && (
        <Modal setVisible={setVisible}>
          <CatalogModal
            img={img}
            make={make}
            year={year}
            model={model}
            description={description}
          />
        </Modal>
      )}
    </li>
  );
};

export default CatalogItem;
