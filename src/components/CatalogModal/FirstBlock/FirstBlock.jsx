import React from "react";
import Description from "../../Description/Description";

const FirstBlock = ({ car, city, country }) => {
  const firstArray = [
    city,
    country,
    `Id: ${car.id}`,
    `Year: ${car.year}`,
    `Type: ${car.type}`,
  ];
  const secondArray = [
    `Fuel Consumption: ${car.fuelConsumption}`,
    `Engine Size: ${car.engineSize}`,
  ];
  return (
    <div>
      <h2 className="text">
        {car.make} <span className="span">{car.model}</span>, {car.year}
      </h2>
      <Description array={firstArray} secondArray={secondArray} />
      <p className="description">{car.description}</p>
    </div>
  );
};

export default FirstBlock;
