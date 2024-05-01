import React from "react";
import SideFilter from "../_components/AllProducts/SideFilter";
import AllCards from "../_components/AllProducts/AllCards";
import AllTitle from "../_components/AllProducts/AllTitle";
function Products() {
  return (
    <div className="bg-background bg-cover bg-center bg-no-repeat">
      <div class="relative bg-[#4e6a80] bg-cover bg-center bg-no-repeat pt-[150px] ">
        <div className=" flex justify-center h-[250px]">
          <AllTitle/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-[50px] pb-[100px] container flex flex-col sm:flex-row justify-between gap-[50px]">
<div className=''>
<SideFilter/>
</div>
<div className='grow'>
       <AllCards/>
</div>
      </div>
    </div>
  );
}

export default Products;
