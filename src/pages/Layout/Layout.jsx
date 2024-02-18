import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FooterStyled, HeaderStyled } from "./Layout.styled";
import Footer from "components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </>
  );
};

export default Layout;
