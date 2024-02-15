import React from "react";
import Description from "../../Description/Description";

const DescrCar = ({ city, country, car, functional }) => {
  const firstArray = [city, country, car.rentalCompany, car.type];
  const secondArray = [car.model, car.id, functional[0]];
  return (
    <>
      <Description array={firstArray} secondArray={secondArray} />
    </>
  );
};

export default DescrCar;
