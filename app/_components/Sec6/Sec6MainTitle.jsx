"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/animation";
function Sec6MainTitle() {
  return (

        <div className="text-center ">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="text-title text-[20px]  md:text-[26px] font-[700] leading-[24px] mb-[11px]"
          >
            THE NEW ARRIVALS
          </motion.h1>
          <Link href="/products">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                type: "spring",
                stiffness: 150,
              }}
              className="text-[14px] font-[400] leading-6 text-para pb-[25px] transition-all duration-200 hover:text-redcolor cursor-pointer"
            >
              {" "}
              Shop All Products
            </motion.p>
          </Link>
        </div>


  );
}

export default Sec6MainTitle;
