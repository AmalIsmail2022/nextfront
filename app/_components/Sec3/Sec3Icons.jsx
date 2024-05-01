"use client";
import React from 'react'
import Image from 'next/image';
import img from '../../../public/images/MzgzYTMxMGEt._CB606352466_.jpg'
import { FaMusic } from "react-icons/fa";
import { GiStopwatch } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { BiSolidCheckShield } from "react-icons/bi";
import { SiHomeassistant } from "react-icons/si";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/animation";
function Sec3Icons() {
  return (
    
                <>
            <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="flex  flex-col items-center justify-center flex-wrap ">
              <FaMusic className="text-para hover:text-blackcolor transition-all duration-200" />
              <h2 className="md:text-[15px] text-[12px] font-[600] mt-[10px] ">
                Vibrant
                <br />
                Sound
              </h2>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.35)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}  className="flex  flex-col items-center ">
              <GiStopwatch className="text-para hover:text-blackcolor transition-all duration-200" />
              <h2 className="md:text-[15px] text-[12px] font-[600]  mt-[10px]">
                Online
                <br />
                Timer
              </h2>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="flex  flex-col items-center ">
              <FaInfoCircle className="text-para hover:text-blackcolor transition-all duration-200" />
              <h2 className="md:text-[15px] text-[12px] font-[600]  mt-[10px]">
                Find <br />
                Information
              </h2>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.65)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="flex  flex-col items-center ">
              <BiSolidCheckShield className="text-para hover:text-blackcolor transition-all duration-200" />
              <h2 className="md:text-[15px] text-[12px] font-[600]  mt-[10px]">
                Privacy
                <br />
                Controls
              </h2>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="flex  flex-col items-center ">
              <SiHomeassistant className="text-para hover:text-blackcolor transition-all duration-200" />
              <h2 className="md:text-[15px] text-[12px] font-[600]  mt-[10px]">
                Smart
                <br />
                Home
              </h2>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.95)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="flex  flex-col items-center ">
              <FaTemperatureQuarter className="text-para hover:text-blackcolor transition-all duration-200" />
              <h2 className="md:text-[15px] text-[12px] font-[600]  mt-[10px]">
                Temperature
                <br />
                Sensor
              </h2>
            </motion.div>
          </>
   
  );
}

export default Sec3Icons
