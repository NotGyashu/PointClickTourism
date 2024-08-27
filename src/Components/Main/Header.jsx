import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import LogoBlack from "../../../public/img/logo/logoBlack.jpeg";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const location = useLocation(); // Get the current location
  const buttons = [
    { name: "Home", link: "/" },
    { name: "Tours", link: "/tours" },
    { name: "Contact", link: "/contact" },
    { name: "About Us", link: "/about" },
   
  ];

  return (
    <div className="flex md:flex-row flex-col gap-2 justify-between bg-white w-full p-2 py-4 border border-b-2">
      <div className=" px-4 col-span-1 ephesis-regular md:text-3xl text-xl font-bold flex justify-center   items-center gap-2 "
      >
        <img src={LogoBlack} className="md:h-8 md:w-8 h-6 w-6 inline rounded-full " />
        Point Click Tourism
      </div>
      <div className=" col-span-1 flex justify-center md:justify-end items-center">
        {buttons.map((button, index) => {
          // Determine if the button's link matches the current path
          const isActive = location.pathname === button.link;

          return (
            <a
              key={index}
              href={button.link}
              className={` rounded-lg py-1 px-3 md:mx-3 text-sm md:text-base ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "text-gray-700 hover:underline hover:text-yellow-400"
              }`}
            >
              {button.name}
            </a>
          );
        })}
        <Link to = {`/cart`} className=" flex border gap-1 bg-yellow-500 text-white rounded-md py-1 px-2">
          Cart <ShoppingCartIcon className="h-6 w-6 "/>
        </Link>
      </div>
    </div>
  );
};

export default Header;
