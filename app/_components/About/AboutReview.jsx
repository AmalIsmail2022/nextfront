"use client"
import React from "react";
import { SlUserFemale } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function AboutReview() {
  return (
    <>
        <div className="mt-[60px] ">
          <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}  className="flex gap-6 items-center mb-[40px] ">
            <div className="border-dotted border-red border-2 p-2">
              <SlUser className="text-[35px] sm:text-[45px] md:text-[60px] p-30 " />
            </div>
            <p className="text-[12px] sm:text-[16px] md:text-[20px]">
              We had this experience before and we really would like to continue
              to patronize you because you and your customer services are good.
            </p>
          </motion.div>
          <motion.div variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="flex gap-6 items-center ">
            <div className="border-dotted border-red border-2 p-2">
              <SlUserFemale className="text-[35px] sm:text-[45px] md:text-[60px] p-30 " />
            </div>
            <p className="text-[12px] sm:text-[16px] md:text-[20px]">
              I ordered this beauty online last week and today they
              delivered!!!! :-)
            </p>
          </motion.div>
        </div>
        <div className="mt-[40px] ">
          <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="flex gap-6 items-center mb-[40px] ">
            <div className="border-dotted border-red border-2 p-2">
              <SlUser className="text-[35px] sm:text-[45px] md:text-[60px] p-30 " />
            </div>

            <p className="text-[12px] sm:text-[16px] md:text-[20px]">
              VORA is doing just great, You ve got a splendid online shop,
              GODSPEED!!!!
            </p>
          </motion.div>
          <motion.div variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="flex gap-6 items-center  mb-[80px] ">
            <div className="border-dotted border-red border-2 p-2">
              <SlUserFemale className="text-[35px] sm:text-[45px] md:text-[60px] p-30 " />
            </div>
            <p className="text-[12px] sm:text-[16px] md:text-[20px]">
              The VORA customer service team is really awesome.
            </p>
          </motion.div>
        </div>
</>
  );
}

export default AboutReview;