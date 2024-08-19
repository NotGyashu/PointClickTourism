import React from "react";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import ActivityMain from "../Components/Main/ActivityMain.jsx";
import { Link } from "react-router-dom";
import CartMain from "../Components/Main/CartMain.jsx";
const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartMain/>
      <Footer />
    </div>
  );
};

export default Cart;
