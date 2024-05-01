"use client";
import React, {useState} from "react";
import Image from "next/image";
import img1 from "../../../public/images/det-1 (1).jpg";
import img2 from "../../../public/images/6.jpg";
import img3 from "../../../public/images/det-1 (2).jpg";
import img4 from "../../../public/images/det-1 (4).jpg";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function ProductImages() {
    const [images, setImages] = useState({
      image1:img1,
      image2:img2,
      image3:img3,
      image4:img4
  });
    const [activeImg, setActiveImg] = useState(images.image2);

  return (

          <motion.div variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} className="flex flex-col gap-6 md:w-[100%] px-[50px]">
            <Image
              src={activeImg}
              alt="fff"
              className="w-full h-full aspect-square object-cover"
            />
            {/* <div className="flex flex-row justify-between wrap h-24"> */}
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-col-4 grid-col-2 gap-[20px]  mx-auto pb-0 xl:pb-[50px]">
              <Image
                src={images.image1}
                alt="fff"
                className=" cursor-pointer border-dotted border-gray-200 border-2 hover:border-red-200 transition-all duration-200"
                onClick={() => setActiveImg(images.image1)}
              />
              <Image
                src={images.image2}
                alt="fff"
                className=" cursor-pointer border-dotted border-gray-200 border-2 hover:border-red-200 transition-all duration-200"
                onClick={() => setActiveImg(images.image2)}
              />
              <Image
                src={images.image3}
                alt="fff"
                className=" cursor-pointer border-dotted border-gray-200 border-2 hover:border-red-200 transition-all duration-200"
                onClick={() => setActiveImg(images.image3)}
              />
              <Image
                src={images.image4}
                alt="fff"
                className="cursor-pointer border-dotted border-gray-200 border-2 hover:border-red-200 transition-all duration-200"
                onClick={() => setActiveImg(images.image4)}
              />
            </div>
              </motion.div>
  );
}

export default ProductImages;
