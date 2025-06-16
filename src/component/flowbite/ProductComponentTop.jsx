import React from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";

const ProductComponentTop = () => {
  return (
    <div className="main-div flex flex-col gap-7">
      <div className="w-full flex items-center gap-10">
        <Input
          size="md"
          label="Product Name"
          color="black"
          name="title"
          className=" py-5"
        />
        <Input
          size="md"
          label="Product description"
          color="black"
          name="title"
          className="py-5"
        />
      </div>
      <div className="flex gap-4">
        <Input
          size="md"
          label="Product color"
          color="black"
          name="title"
          className=" py-5 "
        />
        <Input
          size="md"
          label="Enter Category"
          color="black"
          name="title"
          className=" py-5 "
        />
        <Input
          size="md"
          label="Enter Sub Category"
          color="black"
          name="title"
          className=" py-5 "
        />
      </div>
      <div className="flex gap-4">
        <div className="w-full">
          <Select label="Select Color" color="black">
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>purple</Option>
            <Option>orange</Option>
          </Select>
        </div>
        <div className="w-full">
          <Select label="Select Size" color="black">
            <Option>sm</Option>
            <Option>md</Option>
            <Option>lg</Option>
            <Option>xl</Option>
            <Option>2xl</Option>
          </Select>
        </div>

        <Input
          size="md"
          label="Current Stock"
          color="black"
          name="title"
          className=" py-5 "
        />
      </div>
      <div className="flex gap-4">
        <Input
          size="md"
          label="Price"
          color="black"
          name="title"
          className=" py-5 "
        />
        <Input
          size="md"
          label="Discount Percentange"
          color="black"
          name="title"
          className=" py-5 "
        />
        <Input
          size="md"
          label="Rating"
          color="black"
          name="title"
          className=" py-5 "
        />
        <Input
          size="md"
          label="Review"
          color="black"
          name="title"
          className=" py-5 "
        />
      </div>
      <div>
        <input type="file" />
      </div>
      <div className="flex items-center justify-center mt-3">
        <Button className="font-poppins bg-text2-black text-md capitalize px-6 py-4 ">
          Create your product
        </Button>
      </div>
    </div>
  );
};

export default ProductComponentTop;
