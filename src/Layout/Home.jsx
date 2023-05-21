import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
const Home = () => {
  // dynamic title
  const titles = (title) => {
    useEffect(() => {
      document.title = `${title}-Findus`;
    }, [title]);
  };

  titles("Home");
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
