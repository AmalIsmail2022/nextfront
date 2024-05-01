import React from 'react'
import Image from 'next/image';
import img from '../../../public/images/MzgzYTMxMGEt._CB606352466_.jpg'
import Sec3Title from './Sec3Title';
import Sec3Icons from './Sec3Icons';
function Sec3() {
  return (
    <div>
      <div className=" relative flex justify-center m-auto items-center pt-[270px] bg-[#f8f8f8]">
        <Image src={img} alt="fff" className="w-full  " />
        <div className="absolute text-center   top-[20px]">
   <Sec3Title/>
          <div className="flex justify-between md:text-[40px] text-[25px] gap-[15px] md:gap-[60px] lg:gap-[80px] flex-wrap items-center pl-[10px] pr-[10px]">
            <Sec3Icons/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec3

