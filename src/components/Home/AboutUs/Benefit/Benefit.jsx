import {
  BenefitItemStyled,
  BenefitQuantityStyled,
  BenefitStyled,
} from "./Benefit.styled";

const Benefit = () => {
  const benefitsData = [
    { quantity: "84", description: "Awards for the best service" },
    { quantity: "24/7", description: "Feedback" },
    { quantity: "2", description: "Proven platform" },
    { quantity: "80000+", description: "Rentals" },
  ];

  return (
    <div style={{ marginLeft: "160px" }}>
      <BenefitStyled>
        {benefitsData.map((benefit, index) => (
          <BenefitItemStyled key={index}>
            <BenefitQuantityStyled className={`benefits-${index + 1}`}>
              {benefit.quantity}
            </BenefitQuantityStyled>
            <p className="benefit-description">{benefit.description}</p>
          </BenefitItemStyled>
        ))}
      </BenefitStyled>
    </div>
  );
};

export default Benefit;
