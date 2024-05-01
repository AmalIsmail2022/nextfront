"use client";
import React from 'react'
import Link from "next/link";

import { useState, useEffect } from "react";

function Togg() {
     const [show, setShow] = useState(false);
const showmenu = () => {
    setShow(true);
  };
  const hide1 = () => {
    setShow(false);
  };
  return (
    <div >
    <button onClick={showmenu}>erwererer</button>
 {show ? (
               <h1>yessssssssss</h1>
           
            ) : null}
             
    </div>
  )
}

export default Togg
