import styled from "styled-components";

export const FooterWrapper = styled.div`
  .title {
    font-weight: 500;
    font-size: 20px;
    color: var(--text-white);
  }
  .logo {
    margin-right: auto;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 40px;
  margin-left: 40px;

  .footer-icon {
    width: 67px;
    height: 67px;
  }
`;
