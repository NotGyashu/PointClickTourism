import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeBody = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get("/api/tours/get-all-activity");
        setTours(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to load tours. Please try again later.");
        console.error("An error occurred:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl  mb-4 border-b pb-2">Trending Tours</h2>
      <div className="py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tours.slice(0, 8).map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-6">
        <Link to={`tours`} className="border p-2 rounded-md hover:bg-yellow-500 text-white bg-yellow-400 transition-colors duration-300">
          See All Tours
        </Link>
      </div>
    </div>
  );
};

export default HomeBody;
