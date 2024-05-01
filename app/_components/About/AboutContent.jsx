"use client"
import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function AboutContent() {
  return (

    
          <div className="flex flex-col gap-4 ">
            <div className="mr-[50px]">
              <motion.h1 variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="font-[500] text-[23px] sm:text-[30px] md:text-[40px] pb-2">About Our Vora Store</motion.h1>
              <motion.h4 variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="text-[18px] pb-3">
                We offer outstanding and unparalleled customer experience
                through global brand assortment and dependable value-adding.
              </motion.h4>
              <motion.p variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="text-[14px] text-para">
                VORA.com website is owned and manage by Vora For Electronics
                which is an Egyptian company established in 2022 by opening its
                first retail branch in mobile devices and smart electronics and
                continued to grow up until 2024.<br></br>
                <br></br>
                The company takes on greater responsibilities towards the arab
                society and economy, providing high-quality products at an
                appropriate price level to achieve the greatest value for money.
              </motion.p>
            </div>
          </div>
          

  );
}

export default AboutContent;