import React from "react";
import logo from "../../assets/images/logo.png";
import Icon from "components/Icon";
import { FooterList, FooterWrapper } from "./Footer.styled";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper className="container">
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" width={130} />
      </NavLink>

      <h2 className="title">© 2024 sofiialives | All Rights Reserved</h2>
      <FooterList>
        <li>
          <a href="https://www.linkedin.com/in/sofiiakarpova/">
            <Icon id="linkedin" className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="https://t.me/sofiialives">
            <Icon id="telegram" className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="mailto: karpovasofia1102@gmail.com">
            <Icon id="gmail" className="footer-icon" />
          </a>
        </li>
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
