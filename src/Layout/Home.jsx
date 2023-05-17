import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
