"use client"
import React from "react";
import Link from "next/link";
import img1 from "../../../public/images/5.jpg";
import img2 from "../../../public/images/9.jpg";
import img3 from "../../../public/images/7.jpg";
import img4 from "../../../public/images/8.jpg";
import img5 from "../../../public/images/12.jpg";
import img6 from "../../../public/images/4.jpg";
import img7 from "../../../public/images/11.jpg";
import img8 from "../../../public/images/6.jpg";
import img9 from "../../../public/images/10.jpg";
import img10 from "../../../public/images/14.jpg";
import Card from "../../_components/Sec6/Card";
import { motion } from 'framer-motion';
import { fadeIn } from "../Animation/animation";
function AllCards() {
  return (
  


       <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-col-2 gap-[20px] w-full mx-auto pb-[100px] px-[20px] sm:px-[0]">
            <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img1} title={"Hoop Cam Security"} price={"$79.99"} />
          </motion.div>
          {/* ################################ */}
                      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img2} title={"GoPro Max 360 Camera"} price={"$399.00"} />
          </motion.div>

          {/* ################################ */}
           <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card
            img={img3}
            title={"Beats Wireless Headphones"}
            price={"$165.00"}
          />
          </motion.div>

          {/* ################################ */}
                     <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img4} title={"Portable Partybox"} price={"$269.50"} />
          </motion.div>

          {/* ################## */}
                            <motion.div
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img5} title={"Neckband Earbuds"} price={"$21.99"} />
          </motion.div>


                  <motion.div
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card
            img={img6}
            title={"Bluetooth Headset Wireless"}
            price={"$495.00"}
          />
                    </motion.div>

          {/* ################################ */}
                            <motion.div
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img7} title={"Bluetooth Smart Watch "} price={"$29.67"} />
          </motion.div>

          {/* ################################ */}
                            <motion.div
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img8} title={"Wireless Earbuds"} price={"$35.00"} />
          </motion.div>

          {/* ################################ */}
                            <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card
            img={img9}
            title={"Portable Electric Heater"}
            price={"$150.00"}
          />
          </motion.div>

          {/* ################## */}
                            <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
          <Card img={img10} title={"Smart Watch Touch"} price={"$60.00"} />
                    </motion.div>

        </div>

  );
}

export default AllCards;
