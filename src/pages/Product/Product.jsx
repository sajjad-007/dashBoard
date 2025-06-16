import React from "react";
import ProductComponentTop from "../../component/flowbite/ProductComponentTop";
import ProductComponentBottom from "../../component/flowbite/ProductComponentBottom";

const Product = () => {
  return (
    <div className="flex flex-col gap-14">
      <>
        <ProductComponentTop />
      </>
      <>
        <ProductComponentBottom/>
      </>
    </div>
  );
};

export default Product;
