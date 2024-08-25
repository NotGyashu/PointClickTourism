import React from "react";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import ActivityMain from "../Components/Main/ActivityMain.jsx";
import { Link } from "react-router-dom";
const Actvity = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ActivityMain />      
      <Footer />
    </div>
  );
};

export default Actvity;
