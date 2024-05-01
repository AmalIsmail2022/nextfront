"use client"
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function ContactContent() {
  return (

          <div className="flex gap-4 lg:flex-row flex-col justify-between mt-[100px]">
            <div className="md:mr-[50px] mr-[0] grow-0 pb-[50px]">
              <motion.h1 variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="md:text-[40px] text-[30px] font-semibold md:font-medium pb-8 md:text-left text-center">Contact Us</motion.h1>
              <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className='md:text-left text-center'>
                <div className="flex items-center  md:gap-6 gap-3 md:text-[30px] text-[25px] mb-3 mt-2">
                  <FaHome className="text-para " />
                  Address
                </div>
                <h1 className="pb-6 text-para">
                  211, Sheikh Zayed Street, Al Jarf, Ajman, UAE
                </h1>
                <hr></hr>
                <div className="flex items-center  md:gap-6 gap-3 md:text-[30px] text-[25px] mb-3 mt-2">
                  <FaPhone className="text-para" />
                  Phone
                </div>
                <h1 className="pb-2 text-para">+971 (6) 743-4351</h1>
                <h1 className="pb-6 text-para">+971 (6) 743-2888</h1>

                <hr></hr>
                <div className="flex items-center  md:gap-6 gap-3 md:text-[30px] text-[25px] mb-3 mt-2">
                  <HiOutlineMailOpen className="text-para" />
                  Email
                </div>
                <h1 className="pb-2 text-para">contact@domain.com</h1>
                <h1 className="pb-6 text-para">info@domain.com</h1>
              </motion.div>
              <div className='block md:hidden'>
  <hr></hr>
              </div>
              
            </div>
            <div className="md:mr-[50px] mr-[0] grow">
              <motion.h1 variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="md:text-[40px] text-[30px] font-semibold md:font-medium  pb-8 md:text-left text-center">Send Us Your Message</motion.h1>
              <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}>
                <div className="h-[50px] flex md:flex-row flex-col gap-8 md:mb-8 mb-[100px] ">
                  <input
                    placeholder="First Name"
                    className=" h-full p-2 border-dotted border-red border-2 outline-none hover:border-redcolor transition-all duration-200 md:w-[50%] w-[100%] placeholder:text-[14px]"
                  />
                  <input
                    placeholder="Last Name"
                    className=" h-full p-2 border-dotted border-red border-2 outline-none hover:border-redcolor transition-all duration-200 md:w-[50%] w-[100%]  placeholder:text-[14px]"
                  />
                </div>
                <div className="h-[50px] flex md:flex-row flex-col gap-8 md:mb-8 mb-[100px] ">
                  <input
                    placeholder="Email Address"
                    className=" h-full p-2 border-dotted border-red border-2 outline-none hover:border-redcolor transition-all duration-200 md:w-[50%] w-[100%] placeholder:text-[14px]"
                  />
                  <input
                    placeholder="Phone Number"
                    className=" h-full p-2 border-dotted border-red border-2 outline-none hover:border-redcolor transition-all duration-200 md:w-[50%] w-[100%] placeholder:text-[14px]"
                  />
                </div>
                <div className="h-[50px]  mb-8 ">
                  <input
                    placeholder="Message Subject"
                    className="h-full p-2 border-dotted border-red border-2 outline-none hover:border-redcolor transition-all duration-200 w-[100%]  placeholder:text-[14px]"
                  />
                </div>
                <div className="h-[150px] mb-8">
                  <textArea
                    placeholder="Message Content"
                    className=" h-full p-2 border-dotted border-red border-2 outline-none hover:border-redcolor transition-all duration-200 w-[100%] placeholder:text-[14px]"
                  />
                </div>
                <button className="bg-redcolor hover:bg-blackcolor transition-all duration-200 text-white md:text-[18px] text-[14px] font-semibold py-1.5 md:py-2 px-6 md:px-10 ">
                SEND EMAIL
                </button>
              </motion.div>
            </div>
          </div>

  );
}

export default ContactContent;
