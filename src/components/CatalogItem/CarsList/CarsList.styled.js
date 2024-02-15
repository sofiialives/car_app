import styled from "styled-components";

export const CarsListStyled = styled.ul`
  display: flex;

  .item {
    margin-right: auto;
  }

  .text {
    font-size: 16px;
    font-weight: 500;
    font-family: var(--main-font-medium);
    color: var(--text-black);
  }

  .span {
    color: var(--text-blue);
  }
`;
