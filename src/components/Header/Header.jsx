import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { NavListStyled, NavStyled } from "./Header.styled";

const Header = () => {
  const location = useLocation();

  return (
    <NavStyled className="container">
      <NavLink to="/">
        <img src={logo} alt="logo" width={150} />
      </NavLink>
      <NavListStyled>
        <li>
          <NavLink
            to="/"
            className={`link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={`link ${
              location.pathname === "/catalog" ? "active" : ""
            }`}
          >
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={`link ${
              location.pathname === "/favorites" ? "active" : ""
            }`}
          >
            Favorites
          </NavLink>
        </li>
      </NavListStyled>
    </NavStyled>
  );
};

export default Header;
