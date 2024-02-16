import React, { useState } from "react";
import ImageDiv from "./ImageDiv/ImageDiv";
import CarsList from "./CarsList/CarsList";
import { StyledButton } from "./CatalogItem.styled";
import Modal from "../Modal/Modal";
import CatalogModal from "../CatalogModal/CatalogModal";
import DescrCar from "./DescrCar/DescrCar";

const CatalogItem = ({ car }) => {
  const [visible, setVisible] = useState(false);
  const splitted = car.address.split(",");
  const city = splitted[1];
  const country = splitted[2];
  const functional = car.functionalities.map((item) => {
    const [firstWord, lastWord] = item.split(" ").slice(-2);
    return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(
      1
    )} ${lastWord}`;
  });
  const accessory = car.accessories.map((item) => {
    const words = item.split(" ");

    if (words.length === 1) {
      return item;
    }

    const [firstWord, lastWord] = words.slice(-2);
    return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(
      1
    )} ${lastWord}`;
  });
  const rental = car.rentalConditions.split("\n");
  return (
    <li>
      <ImageDiv img={car.img} />
      <CarsList car={car} />
      <DescrCar
        city={city}
        country={country}
        car={car}
        functional={functional}
      />
      <StyledButton type="button" onClick={() => setVisible(true)}>
        Learn more
      </StyledButton>

      {visible && (
        <Modal setVisible={setVisible}>
          <CatalogModal
            car={car}
            country={country}
            city={city}
            accessory={accessory}
            functional={functional}
            rental={rental}
          />
        </Modal>
      )}
    </li>
  );
};

export default CatalogItem;
