"use client";
import React, {useState} from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function ProductText() {
    const [amount, setAmount] = useState(1);
  return (
          <motion.div variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}  className="flex flex-col gap-4 px-[30px]">
            <div>
              <h1 className="md:text-3xl text-2xl font-bold">Wireless Earbuds</h1>
              <h4 className="pb-3 text-para md:text-base text-[12px]">
                Earphones Built-in Mic for Android iOS Workout
              </h4>
              <h6 className="text-[18px] md:text-2xl font-semibold pb-3">$35.00</h6>
              <p className="pb-6 text-[14px] md:text-lg">
                Wireless Earbud Bluetooth 5.3 Headphones with Clear Sound, 40H
                Playtime, Sport Earbud Touch Control with LED Digital Display,
                IP7 Waterproof Bluetooth.
              </p>

              <div className="flex flex-row items-center md:gap-12 gap-5">
                <div className="flex flex-row items-center">
                 <button
                    className="bg-gray-200 py-1 px-3 md:py-2 md:px-5 md:text-2xl text-lg  h-[40px] md:h-[50px] border-dotted border-gray-300 border-2 hover:border-red-200 transition-all duration-200"
                    onClick={() => setAmount((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <span className="py-1 md:py-3 px-3 md:px-5 bg-gray-200 border-dotted border-gray-300 hover:border-red-200 border-2 text-lg md:text-xl h-[40px] md:h-[50px] transition-all duration-200">
                    {amount}
                  </span>
                  <button
                    className="bg-gray-200 py-1 px-3 md:py-2 md:px-5 md:text-2xl text-lg  h-[40px] md:h-[50px] border-dotted border-gray-300 border-2 hover:border-red-200 transition-all duration-200"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="bg-redcolor hover:bg-blackcolor transition-all duration-200 text-white font-semibold py-2 md:py-3 px-4  md:px-16 h-[40px] md:h-[50px] text-[14px] md:text-[18px]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex gap-4 transition-all duration-200 ">
              <div className="flex hover:text-redcolor  cursor-pointer">
                <MdFavoriteBorder className=" text-[20px] mr-1 " />
                <span>Wishlist</span>
              </div>
              <div className="flex hover:text-redcolor  cursor-pointer">
                <IoIosGitCompare className=" text-[20px] mr-1 " />
                <span>Compare</span>
              </div>
            </div>
            <hr />
            <div>
              <h6 className="text-[14px]">
                <span className="font-semibold">SKU</span>: WVN-17-1
              </h6>
              <h6 className="text-[14px]">
                <span className="font-semibold">Categories</span>: Earbud,
                Earphones, Headphones, Bluetooth
              </h6>
              <h6 className="text-[14px]">
                <span className="font-semibold">Tags</span>: Tag-02, Tag-08
              </h6>
            </div>
          </motion.div>
       
  );
}

export default ProductText;
