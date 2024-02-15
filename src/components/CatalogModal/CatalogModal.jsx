import React from "react";
import { ModalSection, RentalBtn } from "./CatalogModal.styled";
import FirstBlock from "./FirstBlock/FirstBlock";
import SecondBlock from "./SecondBlock/SecondBlock";

const CatalogModal = ({
  car,
  country,
  city,
  rental,
  functional,
  accessory,
}) => {
  const thirdArray = accessory;
  const fourthArray = functional;
  const conditionArray = [rental[0], rental[1]];
  const secondConditionArray = [
    rental[2],
    `Mileage: ${car.mileage}`,
    `Price: ${car.rentalPrice}`,
  ];
  return (
    <ModalSection>
      <img src={car.img} alt={car.make} className="image" />
      <FirstBlock car={car} city={city} country={country} />
      <SecondBlock
        title={"Accessories and functionalities:"}
        array={thirdArray}
        secondArray={fourthArray}
      />
      <SecondBlock
        title={"Rental Conditions: "}
        array={conditionArray}
        secondArray={secondConditionArray}
        isTrue={true}
      />
      <RentalBtn type="button">Rental car</RentalBtn>
    </ModalSection>
  );
};

export default CatalogModal;
