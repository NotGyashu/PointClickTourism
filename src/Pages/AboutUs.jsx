import React from "react";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import { AboutMain } from "../Components/Main/AboutMain.jsx";
const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
     <AboutMain/>
      <Footer />
    </div>
  );
};

export default AboutUs;
