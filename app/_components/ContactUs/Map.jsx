"use client"
import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";import Image from "next/image";

function Map() {
  return (

        <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="w-[100%] flex items-center ">
          <iframe
            className="outline-none"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d28833.650800417174!2d55.505861187554174!3d25.39790246130714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f586c578773b7%3A0xa975c970a9a13343!2sSheikh%20Zayed%20St%20-%20Ajman%20-%20United%20Arab%20Emirates!3m2!1d25.391479399999998!2d55.539949099999994!5e0!3m2!1sen!2seg!4v1713889115924!5m2!1sen!2seg"
            width="100%"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </motion.div>
        
  );
}

export default Map;
