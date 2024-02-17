import React from "react";
import Description from "../../Description/Description";

const FirstBlock = ({ car, city, country }) => {
  const firstBlockArray = [
    city,
    country,
    `Id: ${car.id}`,
    `Year: ${car.year}`,
    `Type: ${car.type}`,
    `Fuel Consumption: ${car.fuelConsumption}`,
    `Engine Size: ${car.engineSize}`,
  ];
  return (
    <div>
      <h2 className="text">
        {car.make} <span className="span">{car.model}</span>, {car.year}
      </h2>
      <Description array={firstBlockArray} />
      <p className="description">{car.description}</p>
    </div>
  );
};

export default FirstBlock;
