import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const ActivityDetails = ({ overview }) => {
  // Initialize all sections as visible by default
  const [visibleSections, setVisibleSections] = useState(
    Array.from({ length: 7 }, (_, index) => index)
  );

  const {
    overview: overviewText = [],
    cancellation_policy: cancellationPolicy = [],
    highlights = [],
    whats_included: whatsIncluded = [],
    whats_not_included: whatsNotIncluded = [],
    important_information: importantInformation = [],
    additional_information: additionalInformation = [],
  } = overview;

  const orderedDetails = [
    { title: "Overview", content: overviewText },
    { title: "Highlights", content: highlights },
    { title: "What's Included", content: whatsIncluded },
    { title: "What's Not Included", content: whatsNotIncluded },
    { title: "Important Information", content: importantInformation },
    { title: "Additional Information", content: additionalInformation },
    { title: "Cancellation Policy", content: cancellationPolicy },
  ];

  const toggleSection = (index) => {
    setVisibleSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-2 sm:p-4 md:p-6 flex flex-col gap-4">
      <span className="text-2xl sm:text-3xl shadow-sm mb-4">More Details</span>
      {orderedDetails.map(({ title, content }, index) => (
        <div
          key={index}
          className="rounded-md shadow-sm shadow-[#d97706] p-1 mb-2"
        >
          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <span>{title}</span>
            <PlusIcon
              className={`h-5 w-5 text-[#d97706] transform transition-transform duration-500 ${
                visibleSections.includes(index) ? "rotate-45" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
              visibleSections.includes(index)
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {Array.isArray(content) && content.length > 0 ? (
              <ul className="list-disc pl-5 mt-2">
                {content.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 bullet-custom-color text-xs sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-xs sm:text-base mt-2">
                {content}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityDetails;
