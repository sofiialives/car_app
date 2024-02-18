import AboutUs from "components/Home/AboutUs/AboutUs";
import Clients from "components/Home/Clients/Clients";
import HomeVideo from "components/Home/Video/HomeVideo";
import React from "react";

const HomePage = () => {
  return (
    <section className="main-container">
      <div>
        <HomeVideo />
      </div>

      <AboutUs />
      <Clients />
    </section>
  );
};

export default HomePage;
