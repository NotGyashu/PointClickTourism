import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Search from "./Search";

const HomeTop = () => {
  const data = [
    {
      link: "https://media.istockphoto.com/id/1460819165/photo/dubai-desert-at-sunset-united-arab-emirates.jpg?s=1024x1024&w=is&k=20&c=Em5DRhh849IFVxSi8b16FzRXXQYS4GsEdXsw-repym4=",
      title: "Dubai Desert",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1675701113413-ca44137ef7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Mountain",
    },
    {
      link: "https://images.unsplash.com/photo-1694612337941-651f7d56edf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Beach",
    },
    {
      link: "https://www.delhitourntravels.in/images/temp/new_slide_11.jpg",
      title: "Cityscape",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="relative overflow-hidden w-full h-[60vh]">
      <TransitionGroup>
        <CSSTransition
          key={index}
          timeout={500} // Duration of the slide transition
          classNames="slide"
        >
          <img
            src={data[index].link}
            alt={data[index].title}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </CSSTransition>
      </TransitionGroup>
      <Search />
    </div>
  );
};

export default HomeTop;
