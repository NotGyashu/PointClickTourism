import React, { useEffect, useState } from "react";
import axios from "axios";
import TourCard from "../Sub/TourCard";
import { MockActivityDetails } from "../Mock";

const ToursMain = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        // const res = await axios.get("/api/tours/get-all-activity");
        // setTours(res.data);
        setTours(MockActivityDetails);
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching tours.");
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="flex-grow p-4 md:p-8 lg:p-14 flex flex-col gap-6">
      <div className="text-3xl md:text-4xl font-bold text-center mb-4">
        Plan Your Next Journey
      </div>
      <div className="flex flex-col ">
        <div className="text-xl font-semibold">Top Places to Visit</div>
        <div className="text-sm text-gray-600 mt-2">
          Embark on a journey to explore unique hidden gems and renowned
          landmarks across the globe – your next adventure awaits!
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="text-lg font-semibold text-gray-500">Loading...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-6">
          <div className="text-lg font-semibold text-red-500">{error}</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tours.length > 0 ? (
            tours.map((tour, index) => <TourCard key={index} tour={tour} />)
          ) : (
            <div className="col-span-full text-center text-lg font-semibold text-gray-500">
              No tours available.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ToursMain;
