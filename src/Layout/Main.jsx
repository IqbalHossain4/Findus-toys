import React from "react";
import Banner from "../Component/Banner";
import ContactUs from "../Component/ContactUs";
import Gallery from "../Component/Gallery/Gellery";
import WrapTabs from "../Component/Tabs";
const Main = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <WrapTabs />
      <ContactUs />
    </div>
  );
};

export default Main;
