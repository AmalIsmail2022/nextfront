
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

function Card({img, title, price}) {
  return (
    <div className="cardys">
      <div>
        <div className="relative xl:w-[100%] lg:w-[100%] h-full m-auto flex justify-end items-end border-dotted border-red border-2 mb-[20px]">
          <Link href="/products/product">
            <Image src={img} alt="fff" className="w-full  " />
          </Link>
          <Link
            href="/"
            className="absolute cardy top-[10px] bg-background md:px-2 md:py-2 px-2 py-2  w-fit transition-all duration-200 text-blackcolor  "
          >
            {" "}
            <div className="text-center text-[14px] md:text-[17px] font-[700]">
              <MdFavoriteBorder className="mb-1 hover:text-redcolor" />
              <hr></hr>
              <IoIosGitCompare className="mt-2 hover:text-redcolor" />
            </div>{" "}
          </Link>
        </div>
        <div>
          <h2 className="py-1">{title}</h2>
          <div className="flex">
            <AiFillStar className="text-[#e1e1e1] mb-2" />
            <AiFillStar className="text-[#e1e1e1] mb-2" />
            <AiFillStar className="text-[#e1e1e1] mb-2" />
            <AiFillStar className="text-[#e1e1e1] mb-2" />
            <AiFillStar className="text-[#e1e1e1] mb-2" />
          </div>
          <Link href="/" className="flex  justify-between ">
            <div className="flex items-start justify-start gap-[5px] hover:text-redcolor">
              <h6 className="text-[14px] price">{price}</h6>
              <SlHandbag className="cardy1" />
              <h6 className="text-[14px] cardy1">Buy Product</h6>
            </div>
            <Link href="/products/product">
              <div className="flex items-start justify-start gap-[5px] hover:text-redcolor">
                <BsSearch className="cardy1" />

                <h6 className="text-[14px] cardy1 ">Quick View</h6>
              </div>
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card