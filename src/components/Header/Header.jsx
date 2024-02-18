import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { NavListStyled, NavStyled } from "./Header.styled";

const Header = () => {
  const location = useLocation();

  const routes = [
    { route: "/", name: "Home" },
    { route: "/catalog", name: "Catalog" },
    { route: "/favorites", name: "Favorites" },
  ];

  return (
    <NavStyled className="container">
      <NavLink to="/">
        <img src={logo} alt="logo" width={150} />
      </NavLink>
      <NavListStyled>
        {routes.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.route}
              className={`link ${
                location.pathname === `${item.route}` ? "active" : ""
              }`}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </NavListStyled>
    </NavStyled>
  );
};

export default Header;
