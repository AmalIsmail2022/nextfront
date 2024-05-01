import React from "react";
import ProductTitle from "../../_components/AllProducts/ProductTitle";
import ProductImages from "../../_components/AllProducts/ProductImages";
import ProductText from "../../_components/AllProducts/ProductText";
function Det() {
  return (
    <div className="bg-background bg-cover bg-center bg-no-repeat">
      <div class="relative bg-[#4e6a80] bg-cover bg-center bg-no-repeat pt-[150px] ">
        <div className=" flex justify-center h-[250px]">
         <ProductTitle/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-[50px] pb-[50px] md:pb-[100px] container">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <ProductImages/>
<ProductText/>
          
        </div>
      </div>
    </div>
  );
}

export default Det;
