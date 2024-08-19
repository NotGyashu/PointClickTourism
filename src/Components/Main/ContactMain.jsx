import React from "react";
import GetInTouch from "../Sub/GetInTouch";
import SendDirectMessage from "../Sub/SendDirectMessage";
import Map from "../Sub/Map";

const ContactMain = () => {
  
  return (
    <div className="grid grid-cols-1 flex-grow p-4 gap-4">
     
      <SendDirectMessage />
      <GetInTouch />
   <Map/>
      
    </div>
  );
};

export default ContactMain;
