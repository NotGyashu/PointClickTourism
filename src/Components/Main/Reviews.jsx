// src/components/Reviews.js

import React, { useEffect, useRef } from "react";
import ReviewCard from "../Sub/ReviewCard";


const Reviews = () => {
  const reviews = [
    {
      id: 1010,
      name: "John Doe",
      review:
        "Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to ",
      star: 5,
    },
    {
      id: 1020,
      name: "Jane Doe",
      review:
        "Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to ",
      star: 5,
    },
    {
      id: 1030,
      name: "John Smith",
      review:
        "Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to ",
      star: 5,
    },
    {
      id: 1040,
      name: "Jane Smith",
      review:
        "Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visitGreat place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to visit,Great place to ",
      star: 5,
    },
    
  ];

  return (
    <div className=" p-3 md:p-6    my-6">
      <h1 className="text-3xl font-bold mb-6">Reviews from TripAdvisor</h1>

      <div className="  scroll-container flex  pr-6 p-2 scrollable  overflow-auto">
        <div className=" gap-6 flex  scroll-content">
          {reviews.concat(reviews).map((review,i) => (
            <div key={review.i} className="scroll-item ">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
