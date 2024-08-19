import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const { name, review: reviewText, star } = review;
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle toggling between expanded and collapsed states
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate text to 100 characters
  const truncateText = (text, charLimit) => {
    if (text.length <= charLimit) return text;
    return text.slice(0, charLimit) + "...";
  };

  return (
    <div className="flex-shrink-0 w-80 md:w-96 border rounded-lg shadow-lg p-4 bg-white">
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-yellow-500 text-xl">
        {"★".repeat(star)}
        {"☆".repeat(5 - star)}
      </div>
      <div className="mt-2">
        <p className={`text-sm ${isExpanded ? "" : "line-clamp-3"}`}>
          {isExpanded ? reviewText : truncateText(reviewText, 150)}
        </p>
        <button
          onClick={handleToggle}
          className="text-blue-500 mt-2 underline text-sm"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
