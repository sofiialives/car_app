import styled from "styled-components";

export const BenefitStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 370px;
  margin-left: auto;
  margin-right: auto;
`;

export const BenefitItemStyled = styled.li`
  width: 122px;
  height: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 24px;
  background-color: #f7f7f7;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  &:nth-child(2n) {
    margin-top: 30px;
    margin-left: 30px;
  }

  .benefit-description {
    color: var(--text-black);
    font-size: 18px;
    font-weight: 500;
  }
`;

export const BenefitQuantityStyled = styled.p`
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-size: ${(props) => (props.large ? "48px" : "42px")};
  line-height: 1.36;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${(props) => (props.large ? "red" : "#3470FF")};

  &.benefits-1::after {
    content: "\002B";
    position: absolute;
    top: 7px;
    right: -15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.38;
    color: red;
  }
`;

export const BenefitDescriptionStyled = styled.p`
  font-size: 12px;
  line-height: 1.4;
  color: #303030;
  margin-top: 8px;
`;
