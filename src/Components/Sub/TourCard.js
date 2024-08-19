import React from "react";
import image1 from "../../../public/img/activities/atlantis-waterpark-dubai-1.jpeg";
import image2 from "../../../public/img/activities/atlantis-waterpark-dubai-2.jpeg";
import image3 from "../../../public/img/activities/atlantis-waterpark-dubai-3.jpeg";
import { StarIcon } from "@heroicons/react/20/solid"; // Use Heroicons or another icon library
import { Link } from "react-router-dom";
const TourCard = ({ tour }) => {
  const tourImage = tour.image || image2; // Fallback to a default image

  // Calculate star ratings
  const rating = tour.rating;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <Link
      to={`/tours/${tour.activityId}`}
      className="relative col-span-1 h-[45vh] bg-white border rounded-[22px] overflow-hidden   shadow-md transition-transform transform hover:scale-[1.03]"
      target="_blank"
    >
      <div className="relative h-[57%] w-full">
        <img
          src={tourImage}
          className="h-full w-full object-cover transition-transform transform "
          alt={tour.title || "Tour image"}
        ></img>
        <button className="absolute top-[10%] p-1 text-sm font-bold right-1 border rounded-md bg-yellow-100 text-black">
          {tour.tag}
        </button>
      </div>

      <div className="p-4 h-[43%] flex flex-col hover:bg-[#faf3e1] ">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-semibold">{tour.title}</span>
            <span className="font-semibold">{tour.location}</span>
            <div className="flex items-center">
              {Array(fullStars)
                .fill()
                .map((_, i) => (
                  <StarIcon
                    key={`full-${i}`}
                    className="h-3 w-3 text-yellow-500"
                  />
                ))}
              {halfStar ? (
                <StarIcon
                  className="h-3 w-3 text-yellow-500"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
              ) : null}
              {Array(emptyStars)
                .fill()
                .map((_, i) => (
                  <StarIcon
                    key={`empty-${i}`}
                    className="h-3 w-3 text-gray-300"
                  />
                ))}
            </div>
            <span className="text-sm">{tour.numberOfReviews} reviews</span>
          </div>
          <div className="flex flex-col text-right">
            <button className="font-bold border rounded-md px-1 mb-2">
              Book Now
            </button>
            <span>AED {tour.price}.00</span>
            <span className="text-sm">{tour.duration} hours</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;