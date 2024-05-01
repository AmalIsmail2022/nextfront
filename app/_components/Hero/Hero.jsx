import React from "react";
import Text from './Text'
import Avatar from './Avatar'
function Hero() {
  return (
    <section class=" relative bg-[#4e6a80] bg-cover bg-center bg-no-repeat pt-[100px]">
      <div className="container flex flex-col md:flex-row  justify-between gap-8">
        <div class="relative mx-auto max-w-screen-xl px-4 grow sm:px-6 lg:flex lg:items-center lg:px-8">
          <Text/>
        </div>
       <Avatar/>
      </div>
    </section>
  );
}
export default Hero;
