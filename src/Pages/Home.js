import React from "react";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import HomeMain from "../Components/Main/HomeMain";
import BookNow from "../Components/Sub/BookNow";
import MessageUs from "../Components/Sub/MessageUs";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen scrollable">
      <Header />
      <BookNow className="absolute" />
      <MessageUs />
      <HomeMain />
      <Footer />
    </div>
  );
};

export default Home;
