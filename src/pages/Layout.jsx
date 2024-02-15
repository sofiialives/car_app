import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
