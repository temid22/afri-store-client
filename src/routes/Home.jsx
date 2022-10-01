import React from "react";
import Promo from "../components/Promo";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import GetUpdates from "../components/GetUpdates";
import Footer from "../components/Footer";
import Navbarr from "../components/navbar/NavBarr";

const Home = () => {
  return (
    <div>
      <Navbarr />
      <Promo />
      <Categories />
      <Slider />
      <Products />
      <GetUpdates />
      <Footer />
    </div>
  );
};

export default Home;
