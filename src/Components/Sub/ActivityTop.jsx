import React, { useState, useRef, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import image1 from "../../../public/img/activities/atlantis-waterpark-dubai-1.jpeg";
import image2 from "../../../public/img/activities/atlantis-waterpark-dubai-2.jpeg";
import image3 from "../../../public/img/activities/atlantis-waterpark-dubai-3.jpeg";

const ActivityTop = ({ tour }) => {
  const rating = tour?.rating ?? 0;
  const fullStars = Math.max(0, Math.min(Math.floor(rating), 5));
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - fullStars - halfStar);

  const images = [image1, image2, image3, image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const newIndex = Math.min(
      Math.max(currentIndex + direction, 0),
      images.length - 1
    );
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const scrollAmount = scrollRef.current.clientWidth / 3; // Each image width when 3 images are visible
    scrollRef.current.scrollTo({
      left: scrollAmount * currentIndex,
      behavior: "smooth",
    });
  }, [currentIndex]);

  if (!tour) return <div>Loading..</div>;

  return (
    <div className="w-full scrollable rounded-md bg-white h-[80vh] lg:h-[60vh] md:h-[50vh] sm:h-[40vh] border flex flex-col relative">
      <div className="flex-1 flex w-full relative h-[60%]">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
            onClick={() => handleScroll(-1)}
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
        )}

        {/* Image container */}
        <div
          className="flex gap-2 overflow-x-hidden scroll-smooth snap-x snap-mandatory w-full"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Remove scrollbar appearance
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[100%] md:w-[50%] lg:w-[32.7%] rounded-md overflow-hidden snap-start"
            >
              <img
                src={image}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                alt={`Tour Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {currentIndex < images.length - 1 && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
            onClick={() => handleScroll(1)}
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>

      <div className="p-6 border flex flex-col md:flex-row items-start md:items-center gap-3">
        {/* Bottom text adjusts based on content */}
        <span className="text-lg md:text-xl font-semibold">
          {tour?.name}, {tour?.location}
        </span>
        <div className="flex items-center">
          {Array(fullStars)
            .fill()
            .map((_, i) => (
              <StarIcon key={`full-${i}`} className="h-3 w-3 text-yellow-500" />
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
              <StarIcon key={`empty-${i}`} className="h-3 w-3 text-gray-300" />
            ))}
        </div>
        <span className="text-sm">{tour?.noOfReviews} reviews</span>
      </div>
      {/* Book Now */}
      {/* <div className="sm:absolute hidden sm:visible bottom-4 sm:flex flex-col px-4 py-2 right-4 bg-white text-black border shadow-md rounded-lg"> */}
        {/* <div className="text-xs sm:text-sm md:text-base">
          Choose Correct package:
        </div>
        <select
          id="example"
          name="example"
          className="border rounded-md focus:outline-none p-1 my-2 text-xs sm:text-sm md:text-base"
        >
       
          <option value="">AED {tour.price} with transport</option>
          <option value="">AED {tour.price}</option>
          <option value="">AED {tour.price}.00</option>
        </select> */}

        <button className="p-1 bg-yellow-500 text-white font-bold  text-xs sm:text-sm md:text-base lg:text-lg">
          Book Now
        </button>
      {/* </div> */}

      {/* Tag */}
      <div className="absolute top-2 left-2 p-2 text-white rounded-md bg-yellow-600 font-semibold">
        {tour.tag}
      </div>
    </div>
  );
};

export default ActivityTop;
