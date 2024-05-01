import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import ContactTitle from "../_components/ContactUs/ContactTitle";
import Map from "../_components/ContactUs/Map";
import ContactContent from "../_components/ContactUs/ContactContent";
function Contact() {
  return (
    <div className=" bg-cover bg-center bg-no-repeat ">
      <div class="relative bg-[#4e6a80] bg-cover bg-center bg-no-repeat pt-[150px] ">
        <div className=" flex justify-center h-[250px]">
 <ContactTitle/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-[50px] pb-[50px] container">
        <Map/>
        <div>
      <ContactContent/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
