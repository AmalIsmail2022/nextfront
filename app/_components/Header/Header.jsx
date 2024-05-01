"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import { CgShoppingBag } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import Image from 'next/image';
import img1 from '../../../public/images/2.jpg'
function Header() {
  const [mouse, setMouse] = useState(false)
  // const [op, setop] = useState({ opacity: 0 })
const headerRef = React.createRef()
  useEffect(() => {
    window.addEventListener("scroll", () => {
     if(window.scrollY > 100){
       headerRef.current.style.background = "black"
      //  headerRef.current.style.padding = "20px 80px"

     } else {
       headerRef.current.style.background = "transparent"
      // headerRef.current.style.padding = "60px 80px"


     }
   })
  }, []);
  const mouse1 = () => {
  setMouse(true)
  // setop({ opacity: 1 })
  }
  const mouse2 = () => {
  setMouse(false)
  // setop({ opacity: 0 })
}
  return (
  <header ref={headerRef} className="bg-primary transition-all duration-200 fixed z-10 w-[100%]">
      <div className="flex h-20 max-w-screen-xl items-center gap-8 container justify-between">
   
   <Link href='/' className=' flex items-center h-10 my-auto z-50 w-[50px]'>    
             <h4 className='object-contain object-left z-50 w-[100%] text-text text-[45px] font-[900]' >V<span className='text-redcolor text-[50px] font-black'>O</span>RA</h4>

  </Link>
        
  
              
             
          

    <div className="flex  items-center gap-4 md:justify-between">
   
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-text transition hover:text-gray-500/75" href="#"> About </a>
          </li>

          <li>
            <a className="text-text transition hover:text-gray-500/75" href="#"> Careers </a>
          </li>

          <li>
            <a className="text-text transition hover:text-gray-500/75" href="#"> History </a>
          </li>

          <li className='h-[100%] relative '>
            <div className=' h-full  '>
               <a className="text-text transition hover:text-gray-500/75  h-full py-[19px]" href="#" onMouseEnter={mouse1} onMouseLeave={mouse2}> Services </a>
            </div>
           
          </li>
          {
          mouse ? (
          <div onMouseEnter={mouse1} onMouseLeave={mouse2} className="absolute left-0 right-0 top-[70px] h-[500px] transition duration-500 bg-white w-full animate-pulse z-5 " style={{ display: mouse ? 'block' : 'none' }}>
        <div className="flex justify-between">
                    <div className="my-[25px] mx-[40px] flex gap-[150px]">
                      <ul>
                        <li>
                          dfdf
                        </li>
                                   <li>
                          dfdf
                        </li>
                                   <li>
                          dfdf
                        </li>
                                   <li>
                          dfdf
                        </li>
                      </ul>
                                        <ul>
                        <li>
                          dfdf
                        </li>
                                   <li>
                          dfdf
                        </li>
                                   <li>
                          dfdf
                        </li>
                                   <li>
                          dfdf
                        </li>
                      </ul>
                  </div>
<div className="flex">
                  <div className='w-[300px] h-full '>
              <Image src={img1} alt='fff' className='w-full  p-[20px]'/>
 
                </div>
                                <div className='w-[300px] h-full '>
              <Image src={img1} alt='fff' className='w-full  p-[20px]'/>
 
                </div>
</div>
                </div>
                </div>
  
          ) : null
      }

          <li>
            <a className="text-text transition hover:text-gray-500/75" href="#"> Projects </a>
          </li>

          
            </ul>
          
      </nav>
        
      <div className="flex items-center  gap-4">
            <div className='flex gap-1 text-text'>
              
              <GrFavorite className='size-6 relative hover:text-redcolor transition duration-200' />
              <div className='h-4 bg-redcolor absolute rounded-[50%] top-11 mx-3 items-center flex'><h6 className='text-white text-[10px] py-3 px-1'>0</h6></div>
              <div className=''>
<CgShoppingBag className='size-6 hover:text-redcolor transition duration-200' />
                     <div className='h-4 bg-redcolor absolute rounded-[50%] top-11 mx-3 items-center flex'><h6 className='text-white text-[10px] py-3 px-1'>0</h6></div>
            </div>
              </div>
          
        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
     
        </button>

      </div>
  </div>

        </div>

       
</header>
  )
}

export default Header
