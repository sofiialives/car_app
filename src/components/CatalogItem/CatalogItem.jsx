import React, { useState } from "react";
import ImageDiv from "./ImageDiv/ImageDiv";
import CarsList from "./CarsList/CarsList";
import { StyledButton } from "./CatalogItem.styled";
import Modal from "../Modal/Modal";
import CatalogModal from "../CatalogModal/CatalogModal";
import { shorterFunction, splittedAdress } from "../utils/catalogCars";
import Description from "../Description/Description";

const CatalogItem = ({ car, isFav, add, remove }) => {
  const [visible, setVisible] = useState(false);

  const city = splittedAdress(car, 1);
  const country = splittedAdress(car, 2);

  const functional = shorterFunction(car.functionalities);

  const catalogItemArray = [
    city,
    country,
    car.rentalCompany,
    car.type,
    car.model,
    car.id,
    functional[0],
  ];
  return (
    <li style={{ width: "274px" }}>
      <ImageDiv
        img={car.img}
        car={car}
        remove={remove}
        add={add}
        isFav={isFav}
      />
      <CarsList car={car} />
      <Description array={catalogItemArray} />
      <StyledButton type="button" onClick={() => setVisible(true)}>
        Learn more
      </StyledButton>

      {visible && (
        <Modal setVisible={setVisible}>
          <CatalogModal
            car={car}
            country={country}
            city={city}
            functional={functional}
          />
        </Modal>
      )}
    </li>
  );
};

export default CatalogItem;
