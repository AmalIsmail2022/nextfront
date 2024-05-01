"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/images/n-2.jpg";
import img2 from "../../../public/images/n-1.jpg";
import img3 from "../../../public/images/n-3.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function SideFilter() {
    return (
      <div className="bg-white p-5">
        <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="mb-8">
          <motion.h1 variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="text-[22px] font-semibold mb-2">Category</motion.h1>
          <hr></hr>
          <div className="flex mb-3 mt-5">
            <input type="checkbox" value="0" className="mr-4" />
            <div className="text-[18px] ">ALL</div>
          </div>
          <div className="flex mb-3">
            <input type="checkbox" value="0" className="mr-4" />
            <div className="text-[18px] ">AUDIO</div>
          </div>
          <div className="flex mb-3">
            <input type="checkbox" value="0" className="mr-4" />
            <div className="text-[18px] ">EARBUDS</div>
          </div>
          <div className="flex mb-3">
            <input type="checkbox" value="0" className="mr-4" />
            <div className="text-[18px] ">WATCHES</div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} >
          <motion.h1 variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="text-[22px] font-semibold mb-2 mt-[50px]">Price</motion.h1>
          <hr></hr>
          <div className="flex mt-6">
            <div className="flex">
              <p className="text-[16px]">From:</p>
              <input
                className="w-[50px] h-[25px] ml-2 pl-3 focus:outline-none border-dotted border-inherit border-2"
                type="number"
              />
            </div>
            <div className="flex ml-2">
              <p className="text-[16px]">To:</p>
              <input
                className="w-[50px] h-[25px] ml-2 pl-3 focus:outline-none border-dotted border-inherit border-2"
                type="number"
              />
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}>
          <motion.h1 variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}  className="text-[22px] font-semibold mb-2 mt-[50px]">Compare</motion.h1>
          <hr></hr>
          <div className=" mt-6">
            <Link href="/products/product">
              <p className="text-[16px] hover:text-redcolor transition-all duration-200 cursor-pointer">
                Product 1
              </p>
            </Link>
            <Link href="/products/product">
              <p className="text-[16px] hover:text-redcolor transition-all duration-200 cursor-pointer">
                Product 2
              </p>
            </Link>

            <Link href="/products/product">
              <p className="text-[16px] hover:text-redcolor transition-all duration-200 cursor-pointer">
                Product 3
              </p>
            </Link>

            <Link href="/products/product">
              <p className="text-[16px] hover:text-redcolor transition-all duration-200 cursor-pointer">
                Product 4
              </p>
            </Link>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}>
          <motion.h1 variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="text-[22px] font-semibold mb-2 mt-[50px]">
            NEW ARRIVALS
          </motion.h1>
          <hr></hr>
          <div className=" mt-6">
            <Link href="/products/product">
              <Image src={img1} alt="fff" className="w-full mb-4 " />
            </Link>
            <Link href="/products/product">
              <Image src={img2} alt="fff" className="w-full mb-4 " />
            </Link>
                 <Link href="/products/product">
              <Image src={img3} alt="fff" className="w-full  " />
            </Link>
          </div>
        </motion.div>
      </div>
    );
}

export default SideFilter;
