import React from 'react'
import Image from 'next/image';
import img from '../../../public/images/1.jpg'
import img1 from '../../../public/images/2.jpg'
import Link from 'next/link'
function Sec4() {
  return (
    <div className=' relative lg:flex justify-between items-center flex-wrap'>
      <div className="relative lg:w-[50%] flex justify-center items-center">
        <Image src={img} alt='fff' className='' />
         <h3 className='absolute lg:mb-[60px] md:mb-[80px] sm:mb-[10px] xs:mb-[15px]  font-[600] text-white text-[18px] '>20% OFF ! LIMITED WEEK DEAL</h3>
        <h2 className='absolute lg:mb-[-25px] md:mb-[5px] sm:mb-[80px] xs:mb-[20px] font-[700] text-white text-[40px]'>sdssffdf ddfdfd hfghgh</h2>
       
             <Link href='/' className='absolute z-50 xl:mb-[10px]  lg:mt-[180px] md:mt-[100px] md:mb-[-20px] sm:mb-[-60px] sm:mt-[60px] xs:mt-[30px] xs:mb-[-50px] hover:bg-redcolor bg-background px-4 py-3 w-fit transition-all duration-200 text-blackcolor  hover:text-white'> <div className='text-center  font-[700]'>DISCOVER NOW</div> </Link>
      </div>
      
      <Image src={img1} alt='fff' className='lg:w-[50%]' />
             
    </div>
  )
}

export default Sec4
