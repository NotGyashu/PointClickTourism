import React from "react";
import HomeTop from "../Sub/HomeTop";
import HomeBody from "../Sub/HomeBody";
import Reviews from "./Reviews";

const HomeMain = () => {
  
  return (
    <div className="flex-grow border scrollable">
      <HomeTop />
      <HomeBody />
      <Reviews />
    </div>
  );
};

export default HomeMain;
