// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Actvity from "./Pages/activity";
import TermaAndConditions from "./Pages/TermaAndConditions";
import Cart from "./Pages/Cart";

const App = () => {
  
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/termsconditions" element={<TermaAndConditions />} />
        <Route path="/tours/:id" element={<Actvity />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
};

export default App;
