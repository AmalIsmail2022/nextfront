"use client";
import React from "react";
import {motion} from 'framer-motion'
import { fadeIn } from "../Animation/animation";
function Text() {
  return (
          <div class="max-w-xl xl:pt-0 lg:pb-[90px] md:pt-[50px] md:text-left text-center ">
            <h1 class="text-[28px] md:text-[32] lg:text-[38px] xl:text-[50px] text-text leading-6 font-extrabold">
              <motion.span
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.3,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 150,
                }}
                className="text-[25px] lg:text-[32px] xl:text-[40px] font-thin "
              >
                The
              </motion.span>{" "}
              FUTURE
            </h1>
            <motion.span
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              class="block text-text text-[28px] md:text-[32] lg:text-[38px] xl:text-[50px] font-extrabold"
            >
              Is In Your Hands
            </motion.span>

            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              class="mt-1 text-text font-normal text-[14px] md:text-[16px] xl:text-[20px]"
            >
              - Free Shipping On Qualified Orders Over $50
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              class="mt-8 flex flex-wrap gap-4 text-center justify-center items-center md:justify-start md:items-start"
            >
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  {" "}
                  Search{" "}
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="md:w-full px-2 outline-none py-1.5 md:py-2.5 pe-10 shadow-sm sm:text-sm m-auto"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </motion.div>
          </div>
     
  );
}

export default Text;
