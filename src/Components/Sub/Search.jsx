import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get("/api/tours/get-all-activity");
        setTour(res.data);
      } catch (err) {
        setTour("Something is wrong");
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-1 border bg-white flex items-center rounded-lg shadow-lg">
      <MapPinIcon className="md:h-6 md:w-6 h-4 w-4 text-gray-400" />
      <input
        className="flex items-center justify-center  lg:w-[40vw] w-[60vw] rounded-lg py-1 px-2 focus:outline-none md:text-base text-xs"
        placeholder="Select your destination"
      />
    </div>
  );
};

export default Search;
