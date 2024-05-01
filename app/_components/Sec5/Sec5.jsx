import React from 'react'
import Image from 'next/image';
import img from '../../../public/images/1.jpg'
import img1 from '../../../public/images/2.jpg'
import Sec5Text from './Sec5Text';
function Sec5() {
  return (
    <div className=" relative lg:flex justify-between items-center flex-wrap">
      <Sec5Text/>
      <Image absolute src={img} alt="fff" className="lg:w-[50%]" />
      <Image absolute src={img1} alt="fff" className="lg:w-[50%]" />
    </div>
  );
}

export default Sec5

