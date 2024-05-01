"use client"
import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function AboutReviewTitle() {
  return (
 
        <div className="text-center">
          <motion.h1 variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="text-title text-[26px] font-[700] leading-[24px] pt-[80px] pb-3">
            Our Customers Reviews!
          </motion.h1>
          <motion.p variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="text-[14px] font-[400] leading-6 text-para">
            Our customers share their feedback.<br></br> It is always our
            pleasure to receive your words.
          </motion.p>
        </div>

  );
}

export default AboutReviewTitle;