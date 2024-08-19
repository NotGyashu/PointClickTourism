import React from "react";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import HomeMain from "../Components/Main/HomeMain";
import ToursMain from "../Components/Main/ToursMain";
const Tours = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ToursMain />
      <Footer />
    </div>
  );
};

export default Tours;
