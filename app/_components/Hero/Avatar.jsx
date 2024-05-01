"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/cover1.png";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";

function Avatar() {
  return (
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="xl:w-[600px] md:w-[400px] h-full sm:mr-[-50px]"
        >
          <Image src={img1} alt="fff" className="w-full  p-[20px] " />
        </motion.div>
  );
}

export default Avatar;
