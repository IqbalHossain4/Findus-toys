import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Component/Banner";
import Gallery from "../Component/Gallery/Gellery";
import WrapTabs from "../Component/Tabs";
const Main = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <WrapTabs />
    </div>
  );
};

export default Main;
