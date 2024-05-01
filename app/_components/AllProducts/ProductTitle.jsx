"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function ProductTitle() {


  return (

          <div class="max-w-xl text-center md:text-center ">
            <motion.span variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} class="block text-text text-[35px] md:text-[50px] font-extrabold">
              {" "}
              PRODUCT DETAILS
            </motion.span>

            <p class="mt-1 max-w-lg sm:text-xl/relaxed text-text font-normal flex items-center justify-center">
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
              <Link href="/products">
                <div className="flex items-center justify-center text-[14px]   ">
                  <motion.span variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: .8}} className="hover:text-redcolor transition-all duration-200">
                    Products
                  </motion.span>{" "}
                  <AiOutlineDoubleRight />
                </div>{" "}
              </Link>
              <motion.div variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: .8}} className="flex items-center justify-center text-[14px]">
                {" "}
                Product Details{" "}
              </motion.div>
            </p>
          </div>
  );
}

export default ProductTitle;
