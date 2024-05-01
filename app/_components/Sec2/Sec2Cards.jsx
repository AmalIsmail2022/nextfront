"use client";
import React from 'react'
import Image from 'next/image';
import img from '../../../public/images/s-l1600 (5).jpg'
import img1 from '../../../public/images/1960.jpg'
import img2 from '../../../public/images/s-l1600.jpg'
import img3 from '../../../public/images/IMG_5095.jpg'
import Link from 'next/link'
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/animation";
function Sec2Cards() {
    return (
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-[40px] w-full  mx-auto pb-[100px]">
            <motion.div variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="relative xl:w-[100%] lg:w-[100%] h-full m-auto flex justify-center items-center border-dotted border-red border-2">
              <Image src={img} alt="fff" className="w-full  " />
              <Link
                href="/products"
                className="absolute bottom-[20px] hover:bg-redcolor bg-background md:px-4 md:py-3 px-3 py-2  w-fit transition-all duration-200 text-blackcolor  hover:text-white"
              >
                {" "}
                <div className="text-center text-[14px] md:text-[17px] font-[700]">
                  PORTABLE AUDIO
                </div>{" "}
              </Link>
            </motion.div>

            <motion.div variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="relative xl:w-[100%] lg:w-[100%] h-full m-auto flex justify-center items-center border-dotted border-red border-2">
              <Image src={img1} alt="fff" className="w-full " />
              <Link
                href="/products"
                className="absolute bottom-[20px] hover:bg-redcolor bg-background md:px-4 md:py-3 px-3 py-2  w-fit transition-all duration-200 text-blackcolor  hover:text-white"
              >
                {" "}
                <div className="text-center text-[14px] md:text-[17px] font-[700]">
                  EARBUDS
                </div>{" "}
              </Link>
            </motion.div>
            <motion.div variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="relative xl:w-[100%] lg:w-[100%] h-full m-auto flex justify-center items-center border-dotted border-red border-2 ">
              <Image src={img2} alt="fff" className="w-full   " />
              <Link
                href="/products"
                className="absolute bottom-[20px] hover:bg-redcolor bg-background md:px-4 md:py-3 px-3 py-2  w-fit transition-all duration-200 text-blackcolor  hover:text-white"
              >
                {" "}
                <div className="text-center text-[14px] md:text-[17px] font-[700]">
                  SMART WATCHES
                </div>{" "}
              </Link>
            </motion.div>
            <motion.div variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="relative xl:w-[100%] lg:w-[100%]  h-full m-auto flex justify-center items-center border-dotted border-red border-2">
              <Image src={img3} alt="fff" className="w-full  " />
              <Link
                href="/products"
                className="absolute bottom-[20px] hover:bg-redcolor bg-background md:px-4 md:py-3 px-3 py-2  w-fit transition-all duration-200 text-blackcolor  hover:text-white"
              >
                {" "}
                <div className="text-center text-[14px] md:text-[17px] font-[700]">
                  DIGITAL CAMERAS
                </div>{" "}
              </Link>
            </motion.div>
          </div>
    );
}

export default Sec2Cards;
