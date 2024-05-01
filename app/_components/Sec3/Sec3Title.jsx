"use client";
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/animation";
function Sec3Title() {
  return (
        <>
          <motion.h1 variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="text-title text-[20px] md:text-[26px] font-[700] leading-[24px] mb-[25px] mt-[15px]">
            SMALL SIZE, BIG POSSIBILITIES
          </motion.h1>
          <motion.p variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}  className="hidden sm:block md:text-[14px] text-[12px] font-[400] leading-6 text-para pb-[25px] md:pb-[35px] container max-w-[750px]">
            Our most popular smart speaker features a sleek design and an
            improved LED display that shows the time, weather and more. Enjoy
            enhanced audio for vibrant sound anywhere in your home, stay on
            track with help from Alexa, and control compatible smart home
            devices.
          </motion.p>

        </>
    
  );
}

export default Sec3Title
