import React from "react";
import { AdvantageWrapper } from "./Advantage.styled";

const Advantage = () => {
  return (
    <AdvantageWrapper>
      <p className="dscr-text">Our advantages</p>
      <h2 className="dscr-title">
        Why do people <span className="dscr-span">choose us</span>?
      </h2>
      <p>
        Sofiko Car is the first choice for hourly car rentals, and here's why.
        The most conscious individuals and large corporations choose our
        services because of our exclusive community of verified, technically
        inspected vehicles. We are proud of our professional approach, vast
        experience and elite fleet of vehicles. Cooperation with us is not just
        about renting a car, it is an opportunity to enjoy the highest standard
        of comfort, safety and executive className. Join the elite, choose
        Sofiko Car - the choice of those who appreciate quality and luxury at
        every step.
      </p>
      <button type="button" className="dscr-button">
        Contact Us
      </button>
    </AdvantageWrapper>
  );
};

export default Advantage;
