import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Soilcontain from "./Soilcontain";
const Soil = () => {
  return (
    <div>
      <Navbar />
      <Hero
        img="https://t4.ftcdn.net/jpg/01/82/65/61/360_F_182656191_YKF0yj0Hbgo12xw8m9BgDvcHbECRy63M.jpg"
        heading="Soil Pollution"
        title="Plant a tree a day and keep soil erosion away."
      />
      <Soilcontain/>
      <Footer
        firstHeading="Earth"
        lastHeading="Pollution"
        contact="+91 7499833141"
        firstLocation="32 Shirala"
        lastLocation="Maharastra, India"
        email="tushardukane9@gmail.com"
      />
    </div>
  );
};

export default Soil;
