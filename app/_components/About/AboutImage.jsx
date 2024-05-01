"use client"

import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/about.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function AboutImage() {
  return (

          <motion.div variants={fadeIn("dow", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="flex flex-col gap-6 lg:w-[100%]">
            <Image 
              src={img1}
              alt="fff"
              className="w-full h-full aspect-square object-cover  "
            />
          </motion.div>
      
  );
}

export default AboutImage;