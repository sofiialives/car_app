import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  &.container {
    margin: 0 128px;
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 40px;

  li {
    position: relative;

    .link {
      font-size: 20px;
      font-weight: 700;
      font-family: var(--main-font-bold);
      color: var(--text-blue);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--text-blue);
        bottom: -4px;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
      }

      &:hover::after,
      &:focus::after,
      &.active::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;
