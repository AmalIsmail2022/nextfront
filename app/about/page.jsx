import React from "react";
import AboutTitle from "../_components/About/AboutTitle";
import AboutContent from "../_components/About/AboutContent";
import AboutImage from "../_components/About/AboutImage";
import AboutReview from "../_components/About/AboutReview";
import AboutReviewTitle from "../_components/About/AboutReviewTitle";
import Sec1 from "../_components/Sec1/Sec1";

function About() {
  return (
    <div className=" bg-cover bg-center bg-no-repeat ">
      <div class="relative bg-[#4e6a80] bg-cover bg-center bg-no-repeat pt-[150px] ">
   <AboutTitle/>
      </div>
      <div className="max-w-7xl mx-auto pt-[50px] pb-[50px] container">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
    <AboutContent/>
          <AboutImage/>
        </div>
      </div>
      <div className="bg-background ">
        <Sec1 />
      </div>
      <div className="flex flex-col container ">
<AboutReviewTitle/>

<AboutReview/>
        
      </div>
    </div>
  );
}

export default About;