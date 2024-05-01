"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/animation";
function Sec5Text() {
  return (
      <div className="absolute lg:w-[50%] xs:w-[100%] flex justify-center items-center flex-col xl:top-[35%] xl:left-0 lg:top-[40%] md:top-[20%] md:left-[0] xs:top-[20%] xs:left-[0]">
        <motion.h3
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="  font-[600] text-white md:text-[18px] sm:text-[14px] text-[12px]"
        >
          20% OFF ! LIMITED WEEK DEAL
        </motion.h3>
        <motion.h2
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="font-[600] md:font-[700] text-white md:text-[35px] sm:text-[28px] text-[22px]"
        >
          PORTABLE WIRELESS CHARGER
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.3,
            delay: 1.5,
            type: "spring",
            stiffness: 150,
          }}
          className=" hover:bg-redcolor bg-background md:px-4 md:py-3 px-3 py-2 w-fit transition-all duration-200 text-blackcolor  hover:text-white"
        >
          <Link href="/">
            {" "}
            <div className="text-center text-[14px] md:text-[17px]  font-[700]">
              DISCOVER NOW
            </div>{" "}
          </Link>
        </motion.div>
      </div>

 
  );
}

export default Sec5Text;
