import React, { useEffect, useState } from "react";
import ActivityTop from "../Sub/ActivityTop";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import BookingForm from "../Main/BookingForm";
import ActivityDetails from "../Sub/ActivityDetails";
import { MockActivityDetails } from "../Mock";
const ActivityMain = () => {
  const [tour, setTour] = useState(null);
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        // const res2 = await axios.get(`/api/tours/get-activity-info/${id}`);
        // setOverview(res2.data);
        // const res = await axios.get(`/api/tours/get-activity/${id}`);
        // setTour(res.data);
        setTour(MockActivityDetails[0]);
      } catch (err) {
        setError("An error occurred while fetching the data.");
        console.error("An error occurred:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex-grow px-4 py-6 sm:px-8 md:px-14 flex flex-col gap-4 border">
      <div className="text-lg sm:text-xl">Tour Details</div>
      {tour && <ActivityTop tour={tour} />}
      {tour && <BookingForm tour={tour} />}
      {overview && <ActivityDetails overview={overview} />}
      {/* <Link to={`tours`} className="p-1 border bg-white shadow-md">Explore more tours</Link> */}
      <div className="w-full flex items-center justify-center mt-4">
        <Link
          to={`tours`}
          className="border p-2 rounded-md bg-yellow-400 text-white transition-colors duration-300
              text-xs md:text-base
                 
             
               hover:bg-yellow-500"
        >
          See All Tours
        </Link>
      </div>
    </div>
  );
};

export default ActivityMain;
