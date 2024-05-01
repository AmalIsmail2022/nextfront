"use client"
import React from 'react'
import Link from 'next/link'
import { IoIosMailOpen } from "react-icons/io";
import { BsDashLg } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function Footer1() {
  return (
    <div className="  pt-[100px] bg-blackcolor">
      <div className="container grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-[40px] xl:text-left lg:text-left md:text-center pb-[100px] text-center">
        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}>
          <h1 className="text-[16px] font-[700] text-[#fff] flex items-center  xl:justify-start lg:justify-start leading-10 md:justify-center justify-center">
            INFORMATION <BsDashLg className="mx-2 text-redcolor text-2xl" />
          </h1>
          <ul className="text-[14px] text-[#757575] leading-7">
            <li className="">Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          
          </ul>
        </motion.div>
        <motion.div variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}>
          <h1 className="text-[16px] font-[700] text-[#fff] flex items-center xl:justify-start lg:justify-start leading-10 md:justify-center justify-center">
            CONTACT <BsDashLg className="mx-2 text-redcolor text-2xl" />
          </h1>
          <ul className="text-[14px] text-[#757575] leading-7">
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Frequently Questions</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="flex flex-col items-center ">
          <Link href="/" className=" flex items-center h-10 mb-[15px] md:mb-[20px] z-50 ">
            <h4 className="object-contain  z-50 w-[100%] text-text text-[35px] md:text-[45px] font-[900]">
              V<span className="text-redcolor md:text-[50px] text-[40px] font-black">O</span>RA
            </h4>
          </Link>

    

          <div className="flex text-[#757575] flex-col text-center">
            <h2>Address: 211, Sheikh Zayed Street, Al Jarf, Ajman, UAE</h2>
            <h2>Call Us: +971 (6) 743-4351, +971 (6) 743-2888</h2>
            <h2>Email: contact@domain.com</h2>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} >
          <h1 className="text-[16px] font-[700] text-[#fff] flex items-center  xl:justify-start lg:justify-start justify-center leading-10 md:justify-center">
            SIGN UP FOR NEWSLETTERS{" "}
            <BsDashLg className="mx-2 text-redcolor text-2xl" />
          </h1>
          <h2 className="flex text-[#757575] pb-10 xl:justify-start lg:justify-start  md:justify-center">
            Be the First to Know. Sign up for newsletter today !
          </h2>
          <div className="h-[40px] md:h-[50px] flex relative md:justify-start  mx-auto">
            <input
              placeholder="Enter your email address "
              className=" h-full pl-[60px] w-full"
            />
            <Link
              href="/"
              className="absolute  bg-redcolor h-[40px] md:h-[50px] w-[50px]"
            >
              <IoIosMailOpen className="text-white text-[25px] md:text-[30px] mx-[23%] my-[19%] md:m-[20%]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer1