"use client"
import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
import { AiOutlineDoubleRight } from "react-icons/ai";

function AllTitle() {
  return (
  
          <div class="max-w-xl text-center md:text-center ">
            <motion.span variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} class="block text-text text-[35px] md:text-[50px] font-extrabold">
              {" "}
              ALL PRODUCTS
            </motion.span>

            <p class="mt-1 max-w-lg sm:text-xl/relaxed text-text font-normal flex items-center justify-center">
              <Link href="/">
                <div className="flex items-center justify-center text-[14px]">
                  <motion.span variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: .8 }}  className="hover:text-redcolor transition-all duration-200">
                    Home
                  </motion.span>
                  <AiOutlineDoubleRight />
                </div>
              </Link>
     
                <div className="flex items-center justify-center text-[14px]   ">
                  <motion.span variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: .8}} className="">
                   All Products
                  </motion.span>{" "}
                </div>{" "}

              
            </p>
          </div>
       
  );
}

export default AllTitle;
