import React from "react";
import facebook from "../../../public/SocialIcons/facebook-app-symbol.png";
import instagram from "../../../public/SocialIcons/instagram.png";
import tripadvisor from "../../../public/SocialIcons/tripadvisor.png";
import Phone from "../../../public/SocialIcons/viber.png"; // Adjust the path as needed
import Email from "../../../public/SocialIcons/email.png"; // Adjust the path as needed

const GetInTouch = () => {
  const contactMethods = [
    {
      id: 1,
      method: "Email",
      src: Email,
      text: "Shoot us an email",
      link: "mailto:info@pointclicktourism.com",
    },
    {
      id: 2,
      method: "Phone",
      src: Phone,
      text: "Call us",
      link: "tel:+254712345678",
    },
    {
      id: 3,
      method: "Instagram",
      src: instagram,
      text: "Follow us on Instagram",
      link: "https://www.instagram.com/pointclicktourism",
    },
    {
      id: 4,
      method: "Facebook",
      src: facebook,
      text: "Follow us on Facebook",
      link: "https://www.facebook.com/pointclicktourism", // Corrected URL
    },
    {
      id: 5, // Changed to a unique id
      method: "TripAdvisor",
      src: tripadvisor,
      text: "Rate us on TripAdvisor",
      link: "https://www.tripadvisor.com/pointclicktourism", // Corrected URL
    },
  ];

  return (
    <div className="col-span-2 bg-white md:col-span-1 border p-4 flex justify-center shadow-md rounded">
      <div className="flex flex-col p-4  gap-3 ">
        <h1 className="text-4xl font-bold mb-2 text-center">Get in Touch</h1>
        <p className="mb-2 text-center">
          We'd love to hear from you. Choose the suitable method:
        </p>

        <div className="my-6">
          {contactMethods.map((contactMethod) => (
            <div
              key={contactMethod.id}
              className="flex items-center gap-4 mb-2"
            >
              <img
                src={contactMethod.src}
                alt={contactMethod.method}
                className="h-6 w-6 hover:-translate-x-1"
              />
              <a
                href={contactMethod.link}
                className=" hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactMethod.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
