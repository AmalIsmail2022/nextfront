"use client"
import React from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function AboutTitle() {
  return (

        <div className=" flex justify-center h-[250px]">
          <div className="max-w-xl text-center md:text-center ">
            <motion.span variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="block text-text text-[35px] md:text-[50px]  font-extrabold">
              {" "}
              ABOUT US
            </motion.span>

            <p className="mt-1 max-w-lg sm:text-xl/relaxed text-text font-normal flex items-center justify-center">
              <Link href="/">
                <div className="flex items-center justify-center text-[14px]">
                  <motion.span variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: .8 }} className="hover:text-redcolor transition-all duration-200">
                    Home
                  </motion.span>
                  <AiOutlineDoubleRight />
                </div>
              </Link>
              <div className="flex items-center justify-center text-[14px]   ">
                <motion.span variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: .8}} className="transition-all duration-200">About Us</motion.span>{" "}
              </div>{" "}
            </p>
          </div>
        </div>
  
  );
}

export default AboutTitle;
