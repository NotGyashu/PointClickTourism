import React, { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { MockActivityDetails } from "../Mock"; // Import the mock data

const Search = () => {
  const [tour, setTour] = useState(MockActivityDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTours([]);
    } else {
      const results = tour.filter((item) =>
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTours(results);
    }
  }, [searchTerm, tour]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-1 border bg-white flex items-center rounded-lg shadow-lg">
      <MapPinIcon className="md:h-6 md:w-6 h-4 w-4 text-gray-400" />
      <input
        className="flex items-center justify-center lg:w-[40vw] w-[60vw] rounded-lg py-1 px-2 focus:outline-none md:text-base text-xs"
        placeholder="Select your destination"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {filteredTours.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-10">
          {filteredTours.map((item) => (
            <li
              key={item.activityId}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSearchTerm(item.location)}
            >
              {item.name} - {item.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
