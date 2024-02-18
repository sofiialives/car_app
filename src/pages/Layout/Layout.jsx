import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { HeaderStyled } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
