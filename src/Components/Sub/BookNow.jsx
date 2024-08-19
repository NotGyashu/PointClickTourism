import React from "react";
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <Link to = {`tours`} 
    className=" fixed top-2/3  md:top-1/2 left-0 transform -translate-y-1/2 z-10 px-2 py-1 lg:px-4 lg:py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 lg:text-lg">
      Book Now
    </Link>
  );
};

export default BookNow;
