import React from "react";
import { ModalSection, RentalBtn } from "./CatalogModal.styled";
import FirstBlock from "./FirstBlock/FirstBlock";
import SecondBlock from "./SecondBlock/SecondBlock";
import { shorterFunction } from "../../utils/catalogCars";

const CatalogModal = ({ car, country, city, functional }) => {
  const rental = car.rentalConditions.split("\n");

  const accFunArray = shorterFunction(car.accessories, functional);
  const conditionArray = [
    rental[0],
    rental[1],
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
        array={accFunArray}
      />
      <SecondBlock
        title={"Rental Conditions: "}
        array={conditionArray}
        isTrue={true}
      />
      <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
    </ModalSection>
  );
};

export default CatalogModal;
