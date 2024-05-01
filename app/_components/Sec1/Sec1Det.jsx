"use client";
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
import { LiaIdCardSolid } from "react-icons/lia";
import { BsBagHeart } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/animation";
function Sec1Det() {
  return (
    <>
      <motion.div variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="text-center">
        <div  className=" mb-[15px] m-auto w-[100px] h-[100px] flex justify-center items-center border-dotted border-inherit border-2">
          <LiaShippingFastSolid className="text-[80px] text-para hover:text-blackcolor transition-all duration-200" />
        </div>
        <h1 className="mb-[15px] font-[700]">FREE SHIPPING</h1>
        <p className="text-[14px] font-[400] leading-6 text-para">
          Get 10% cash back, free shipping, free returns, and more at 1000+ top
          retailers!
        </p>
      </motion.div>
      <motion.div variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="text-center">
        <div className=" mb-[15px] m-auto w-[100px] h-[100px] flex justify-center items-center border-dotted border-inherit border-2">
          <BsCashCoin className="text-[70px] text-para  hover:text-blackcolor transition-all duration-200" />
        </div>

        <h1 className="mb-[15px] font-[700]">30 DAYS MONEY BACK </h1>
        <p className="text-[14px] font-[400] leading-6 text-para">
          100% satisfaction guaranteed, or get your money back within 30 days!{" "}
        </p>
      </motion.div>
      <motion.div variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="text-center">
        <div className=" mb-[15px] m-auto w-[100px] h-[100px] flex justify-center items-center border-dotted border-inherit border-2">
          <LiaIdCardSolid className="text-[80px] mx-auto text-para hover:text-blackcolor transition-all duration-200" />
        </div>

        <h1 className="mb-[15px] font-[700]">SAFE PAYMENT</h1>
        <p className="text-[14px] font-[400] leading-6 text-para">
          Pay with the world’s most popular and secure payment methods.
        </p>
      </motion.div>
      <motion.div variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="text-center">
        <div className=" mb-[15px] m-auto w-[100px] h-[100px] flex justify-center items-center border-dotted border-inherit border-2">
          <BsBagHeart className="text-[70px] mx-auto text-para  hover:text-blackcolor transition-all duration-200" />
        </div>
        <h1 className="mb-[15px] font-[700]">LOYALTY CUSTOMER</h1>
        <p className="text-[14px] font-[400] leading-6 text-para transition-all duration-200">
          Card for the other 30% of their purchases at a rate of 1% cash back.
        </p>
      </motion.div>
    </>
  );
}

export default Sec1Det;
