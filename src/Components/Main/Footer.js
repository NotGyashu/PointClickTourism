import React from "react";
import facebookImage from "../../../public/SocialIcons/facebook-app-symbol.png"; // Adjust the path as needed
import tripadvisorImage from "../../../public/SocialIcons/tripadvisor.png"; // Adjust the path as needed
import Instagram from "../../../public/SocialIcons/instagram.png"; // Adjust the path as needed
import LogoBlack from "../../../public/img/logo/logoBlack.jpeg";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tour", link: "/tours" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Terms & Conditions", link: "/termsconditions" },
  ];

  const socials = [
    {
      src: facebookImage,
      link: "https://www.facebook.com", // Replace with actual link
    },
    {
      src: Instagram,
      link: "https://www.tripadvisor.com", // Replace with actual link
    },
    {
      src: tripadvisorImage,
      link: "https://www.tripadvisor.com", // Replace with actual link
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="border bg-[#faf3e1] text-black flex flex-col gap-2 justify-center items-center py-6">
      <div className="flex gap-2  ephesis-regular text-3xl font-bold">
        {" "}
        <img src={LogoBlack} className="h-8 w-8 inline rounded-full" />
        Point Click Tourism{" "}
      </div>
      <div className="flex flex-col sm:flex-row  line ">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.link}
              className="hover:text-yellow-500 text-center"
            >
              {link.name}
            </a>
          );
        })}
      </div>
      <div className="flex gap-4  p-2">
        {socials.map((social, index) => {
          return (
            <a key={index} href={social.link}>
              <img
                src={social.src}
                alt="social"
                className="h-8 w-8 hover:-translate-y-1 "
              />
            </a>
          );
        })}
      </div>
      <div className="w-full border border-top-0 my-4 overflow-hidden" />
      <div className=" flex gap-6">
        &copy; {year} <span>Point Click Tourism</span>
      </div>
    </div>
  );
};
//#EFDD09
export default Footer;
