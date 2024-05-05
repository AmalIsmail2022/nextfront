"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import Image from "next/image";
import img1 from "../../../public/images/0563ae9afebc374063780fe6fa438c59.jpg";
import img2 from "../../../public/images/d4ede2b2020b55ffbd07f56c3c69e99d.jpg";
import { motion } from "framer-motion";
import { RiAlignTop } from "react-icons/ri";

function Header11() {


const [color, setColor] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     if (window.scrollY >= 90) {
       setColor(true);
     } else {
       setColor(false);
     }
   });
 }, []);



  const [show, setShow] = useState(false);
  const showmenu = () => {
    setShow(!show);
  };



const [showscroll, setshowscroll] = useState(false);
useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setshowscroll(true);
    } else {
      setshowscroll(false);
    }
  });
}, []);



  return (
    <div>
      {color ? (
        <header               id="up"
 className="header-bg transition-all duration-200 fixed z-10 w-[100%]">
          <div  className="flex h-20 max-w-screen-xl items-center gap-8 container justify-between">
            <Link
              href="/"
              className=" flex items-center h-10 my-auto z-50 w-[50px]"
            >
              <motion.h4
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 1.0, type: "spring" }}
                className="object-contain object-left z-50 w-[100%] text-text text-[35px] md:text-[45px] font-[900]"
              >
                V
                <span className="text-redcolor md:text-[50px] text-[40px] font-black">
                  O
                </span>
                RA
              </motion.h4>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                type: "spring",
                stiffness: 150,
              }}
              className="flex   items-center gap-4 md:justify-between"
            >
              <nav aria-label="Global" className="hidden md:block ">
                <div className="flex items-center gap-6 text-sm ">
                  <div className="">
                    <Link
                      href="/"
                      className="text-text transition hover:text-[#eee]"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/about"
                      className="text-text transition hover:text-[#eee]"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </div>

                  <div className=" h-full serv">
                    <div className="menu absolute top-[80px] h-fit transition duration-500 bg-white w-[100%] animate-pulse z-5 ">
                      <div className="flex  gap-[20px] justify-between mx-[40px]">
                        <div className="my-[25px]  flex ">
                          <div className="flex flex-col lg:items-start ">
                            <h1 className="lg:text-[18px] text-[16px] font-[700] leading-10">
                              PRODUCT CATEGORIES
                            </h1>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                              href="/products"
                            >
                              HEADPHONES
                            </Link>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200 "
                              href="/products"
                            >
                              DIGITAL CAMERAS
                            </Link>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                              href="/products"
                            >
                              SMART WATCHES
                            </Link>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                              href="/products"
                            >
                              PORTABLE AUDIO
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-start my-[25px] ">
                          <h1 className="lg:text-[18px] text-[16px] font-[700] leading-10">
                            SHOP PAGES
                          </h1>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY ACCOUNT
                          </Link>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY WISHLIST
                          </Link>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY CART
                          </Link>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY CHECKOUT
                          </Link>
                        </div>
                        <div className="flex gap-[40px] mt-[40px] mb-[40px] ">
                          <Link
                            href="/products"
                            className="xl:w-[300px] lg:w-[200px] md:w-[150px] sm:w-[100px] h-full "
                          >
                            <Image
                              src={img2}
                              alt="fff"
                              className="w-full cursor-pointer"
                            />
                          </Link>
                          <Link
                            href="/products"
                            className="xl:w-[300px] lg:w-[200px] md:w-[150px] h-full sm:w-[100px]"
                          >
                            <Image
                              src={img1}
                              alt="fff"
                              className="w-full cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>

                      <div className=" h-[40px] bg-[#eee]"></div>
                    </div>

                    <Link
                      href="/"
                      className="text-text transition hover:text-[#eee] h-full py-[19px] "
                    >
                      {" "}
                      Shop{" "}
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/contact-us"
                      className="text-text transition hover:text-[#eee]"
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </div>

                  <div className=" h-full serv">
                    <div className="menu1 absolute  top-[80px] h-fit transition duration-500 bg-white w-fit mx-[-10px] animate-pulse z-5 ">
                      <div className="flex justify-between items-center">
                        <div className="my-[10px]  flex gap-[150px] ">
                          <div className="flex flex-col ">
                            <Link
                              className="mb-[10px] px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/about"
                            >
                              ABOUT US
                            </Link>
                            <Link
                              className="mb-[10px] px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/contact-us"
                            >
                              CONTACT US
                            </Link>
                            <Link
                              className="mb-[10px] px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/"
                            >
                              QUESTIONS
                            </Link>
                            <Link
                              className=" px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/"
                            >
                              PRIVACY POLICY
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/"
                      className="text-text transition hover:text-[#eee] h-full py-[19px] "
                    >
                      {" "}
                      Pages{" "}
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="flex items-center  gap-4">
                <div className="flex gap-2 text-text ">
                  <GrFavorite className="size-6 relative hover:text-redcolor transition duration-200 " />
                  <div className="h-4 bg-redcolor absolute rounded-[50%] top-11 mx-3 items-center flex">
                    <h6 className="text-white text-[10px] py-3 px-1">0</h6>
                  </div>
                  <div className="">
                    <CgShoppingBag className="size-6 hover:text-redcolor transition duration-200" />
                    <div className="h-4 bg-redcolor absolute rounded-[50%] top-11 mx-3 items-center flex">
                      <h6 className="text-white text-[10px] py-3 px-1">0</h6>
                    </div>
                  </div>
                </div>
                <button
                  onClick={showmenu}
                  className="block  rounded bg-gray-100 p-2.5 flex items-center justify-center text-gray-600 transition hover:text-gray-600/75 md:hidden w-[30px] h-[30px]"
                >
                  <span className=" sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
          {show ? (
            <div className="fixed1">
              <div className="minimenue flex flex-col 2xs:flex-row justify-between bg-white  max-w-[100%]">
                <div className=" flex flex-col py-4 ">
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] sm:text-[16px] px-4 py-2 font-[700] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200 2xs:w-full"
                    href="/"
                  >
                    HOME
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] sm:text-[16px] px-4 py-2 font-[700] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200"
                    href="/about"
                  >
                    ABOUT
                  </Link>

                  <Link
                    className=" px-4 py-2 text-[12px] 2sm:text-[14px] sm:text-[16px] font-[700] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200"
                    href="/contact-us"
                  >
                    CONTACT US
                  </Link>
                </div>
                <div className="flex flex-col lg:items-start  ">
                  <div className="block 2xs:hidden">
                    <hr></hr>
                  </div>
                  <h1 className="text-[12px] 2sm:text-[14px] font-[700] leading-10 px-3  ">
                    PRODUCT CATEGORIES
                  </h1>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200 px-3  "
                    href="/products"
                  >
                    HEADPHONES
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:text-redcolor hover:bg-[#eee] 2xs:hover:bg-transparent transition-all duration-200 px-3  "
                    href="/products"
                  >
                    DIGITAL CAMERAS
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:text-redcolor hover:bg-[#eee] 2xs:hover:bg-transparent transition-all duration-200 px-3  "
                    href="/products"
                  >
                    SMART WATCHES
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:text-redcolor hover:bg-[#eee] 2xs:hover:bg-transparent transition-all duration-200 px-3  "
                    href="/products"
                  >
                    PORTABLE AUDIO
                  </Link>
                </div>
                <div className="block 2xs:hidden">
                  <hr></hr>
                </div>
                <div className="flex flex-col lg:items-start ">
                  <h1 className="text-[12px] 2sm:text-[14px] font-[700] leading-10 px-3">
                    SHOP PAGES
                  </h1>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY ACCOUNT
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY WISHLIST
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY CART
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </header>
      ) : (
        <header               id="up"
 className="transition-all duration-200 fixed z-10 w-[100%]">
          <div className="flex h-20 max-w-screen-xl items-center gap-8 container justify-between">
            <Link
              href="/"
              className=" flex items-center h-10 my-auto z-50 w-[50px]"

            >
              <motion.h4
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 1.0, type: "spring" }}
                className="object-contain object-left z-50 w-[100%] text-text text-[35px] md:text-[45px] font-[900]"
              >
                V
                <span className="text-redcolor md:text-[50px] text-[40px] font-black">
                  O
                </span>
                RA
              </motion.h4>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                type: "spring",
                stiffness: 150,
              }}
              className="flex   items-center gap-4 md:justify-between"
            >
              <nav aria-label="Global" className="hidden md:block ">
                <div className="flex items-center gap-6 text-sm ">
                  <div className="">
                    <Link
                      href="/"
                      className="text-text transition hover:text-[#eee]"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/about"
                      className="text-text transition hover:text-[#eee]"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </div>

                  <div className=" h-full serv">
                    <div className="menu absolute top-[80px] h-fit transition duration-500 bg-white w-[100%] animate-pulse z-5 ">
                      <div className="flex  gap-[20px] justify-between mx-[40px]">
                        <div className="my-[25px]  flex ">
                          <div className="flex flex-col lg:items-start ">
                            <h1 className="lg:text-[18px] text-[16px] font-[700] leading-10">
                              PRODUCT CATEGORIES
                            </h1>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                              href="/products"
                            >
                              HEADPHONES
                            </Link>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200 "
                              href="/products"
                            >
                              DIGITAL CAMERAS
                            </Link>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                              href="/products"
                            >
                              SMART WATCHES
                            </Link>
                            <Link
                              className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                              href="/products"
                            >
                              PORTABLE AUDIO
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-start my-[25px] ">
                          <h1 className="lg:text-[18px] text-[16px] font-[700] leading-10">
                            SHOP PAGES
                          </h1>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY ACCOUNT
                          </Link>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY WISHLIST
                          </Link>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY CART
                          </Link>
                          <Link
                            className="mb-[10px] lg:text-[16px] text-[14px] hover:text-redcolor transition-all duration-200"
                            href="/products"
                          >
                            MY CHECKOUT
                          </Link>
                        </div>
                        <div className="flex gap-[40px] mt-[40px] mb-[40px] ">
                          <Link
                            href="/products"
                            className="xl:w-[300px] lg:w-[200px] md:w-[150px] sm:w-[100px] h-full "
                          >
                            <Image
                              src={img2}
                              alt="fff"
                              className="w-full cursor-pointer"
                            />
                          </Link>
                          <Link
                            href="/products"
                            className="xl:w-[300px] lg:w-[200px] md:w-[150px] h-full sm:w-[100px]"
                          >
                            <Image
                              src={img1}
                              alt="fff"
                              className="w-full cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>

                      <div className=" h-[40px] bg-[#eee]"></div>
                    </div>

                    <Link
                      href="/"
                      className="text-text transition hover:text-[#eee] h-full py-[19px] "
                    >
                      {" "}
                      Shop{" "}
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/contact-us"
                      className="text-text transition hover:text-[#eee]"
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </div>

                  <div className=" h-full serv">
                    <div className="menu1 absolute  top-[80px] h-fit transition duration-500 bg-white w-fit mx-[-10px] animate-pulse z-5 ">
                      <div className="flex justify-between items-center">
                        <div className="my-[10px]  flex gap-[150px] ">
                          <div className="flex flex-col ">
                            <Link
                              className="mb-[10px] px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/about"
                            >
                              ABOUT US
                            </Link>
                            <Link
                              className="mb-[10px] px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/contact-us"
                            >
                              CONTACT US
                            </Link>
                            <Link
                              className="mb-[10px] px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/"
                            >
                              QUESTIONS
                            </Link>
                            <Link
                              className=" px-5 py-2 hover:bg-[#eee] hover:text-redcolor transition-all duration-200"
                              href="/"
                            >
                              PRIVACY POLICY
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/"
                      className="text-text transition hover:text-[#eee] h-full py-[19px] "
                    >
                      {" "}
                      Pages{" "}
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="flex items-center  gap-4">
                <div className="flex gap-2 text-text ">
                  <GrFavorite className="size-6 relative hover:text-redcolor transition duration-200 " />
                  <div className="h-4 bg-redcolor absolute rounded-[50%] top-11 mx-3 items-center flex">
                    <h6 className="text-white text-[10px] py-3 px-1">0</h6>
                  </div>
                  <div className="">
                    <CgShoppingBag className="size-6 hover:text-redcolor transition duration-200" />
                    <div className="h-4 bg-redcolor absolute rounded-[50%] top-11 mx-3 items-center flex">
                      <h6 className="text-white text-[10px] py-3 px-1">0</h6>
                    </div>
                  </div>
                </div>
                <button
                  onClick={showmenu}
                  className="block  rounded bg-gray-100 p-2.5 flex items-center justify-center text-gray-600 transition hover:text-gray-600/75 md:hidden w-[30px] h-[30px]"
                >
                  <span className=" sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
          {show ? (
            <div className="fixed1">
              <div className="minimenue flex flex-col 2xs:flex-row justify-between bg-white  max-w-[100%]">
                <div className=" flex flex-col py-4 ">
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] sm:text-[16px] px-4 py-2 font-[700] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200 2xs:w-full"
                    href="/"
                  >
                    HOME
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] sm:text-[16px] px-4 py-2 font-[700] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200"
                    href="/about"
                  >
                    ABOUT
                  </Link>

                  <Link
                    className=" px-4 py-2 text-[12px] 2sm:text-[14px] sm:text-[16px] font-[700] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200"
                    href="/contact-us"
                  >
                    CONTACT US
                  </Link>
                </div>
                <div className="flex flex-col lg:items-start  ">
                  <div className="block 2xs:hidden">
                    <hr></hr>
                  </div>
                  <h1 className="text-[12px] 2sm:text-[14px] font-[700] leading-10 px-3  ">
                    PRODUCT CATEGORIES
                  </h1>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:bg-[#eee] 2xs:hover:bg-transparent hover:text-redcolor transition-all duration-200 px-3  "
                    href="/products"
                  >
                    HEADPHONES
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:text-redcolor hover:bg-[#eee] 2xs:hover:bg-transparent transition-all duration-200 px-3  "
                    href="/products"
                  >
                    DIGITAL CAMERAS
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:text-redcolor hover:bg-[#eee] 2xs:hover:bg-transparent transition-all duration-200 px-3  "
                    href="/products"
                  >
                    SMART WATCHES
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:text-redcolor hover:bg-[#eee] 2xs:hover:bg-transparent transition-all duration-200 px-3  "
                    href="/products"
                  >
                    PORTABLE AUDIO
                  </Link>
                </div>
                <div className="block 2xs:hidden">
                  <hr></hr>
                </div>
                <div className="flex flex-col lg:items-start ">
                  <h1 className="text-[12px] 2sm:text-[14px] font-[700] leading-10 px-3">
                    SHOP PAGES
                  </h1>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY ACCOUNT
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY WISHLIST
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] 2xs:hover:bg-transparent hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY CART
                  </Link>
                  <Link
                    className="mb-[10px] text-[12px] 2sm:text-[14px] hover:bg-[#eee] 2xs:hover:bg-transparent  hover:text-redcolor transition-all duration-200 px-3"
                    href="/"
                  >
                    MY CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </header>
      )}
      <Link style={{ opacity: showscroll ? 1 : 0, transition: "1s" }} href="#up">
        <button className="scrolltotop flex align-items justify-center">
          
          <RiAlignTop className='text-[30px]'/>
        </button>
      </Link>
    </div>
  );
}

export default Header11;
