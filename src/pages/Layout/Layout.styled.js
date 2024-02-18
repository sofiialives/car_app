import styled from "styled-components";
import bg from "../../assets/images/header-bg.png";
import footer from "../../assets/images/footer.png";

export const HeaderStyled = styled.header`
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  background-image: url(${bg});
  padding: 14px 0;
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const FooterStyled = styled.footer`
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  background-image: url(${footer});
  padding: 14px 0;
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1), 0 -8px 16px rgba(0, 0, 0, 0.2);
  }
`;
