import React from "react";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";

const ProductDialogBody = () => {
  return (
    <div className="main-div flex flex-col gap-7">
      <div className="flex gap-4">
        <Input
          size="md"
          label="Product Name"
          color="black"
          name="title"
          className=" py-5"
        />
        <Input
          size="md"
          label="Current Stock"
          color="black"
          name="title"
          className=" py-5 "
          type="number"
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
      </div>
      <div className="flex gap-4">
        <Input
          size="md"
          label="Price"
          color="black"
          name="title"
          className=" py-5 "
          type="number"
        />
        <Input
          size="md"
          label="Discount Percentange"
          color="black"
          name="title"
          className=" py-5 "
          type="number"
        />
      </div>
      <div className="flex gap-4">
        <Input
          size="md"
          label="Enter Category ID"
          color="black"
          name="title"
          className=" py-5 "
        />
        <Input
          size="md"
          label="Enter Sub Category ID"
          color="black"
          name="title"
          className=" py-5 "
        />
      </div>
      <div className="flex gap-4 ">
        <Textarea label="Product Description....." className="h-[30px]"/>
        <Textarea label="Write Your Review........." className="h-[30px]" />
      </div>
      <div className="flex gap-4 items-center">
        {/* Image upload part */}
        <div className="flex items-center justify-center w-full ">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-[150px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        {/* Image upload part */}
        <Input
          size="md"
          label="Rating"
          color="black"
          name="title"
          className=" py-5 "
          type="number"
        />
      </div>
    </div>
  );
};

export default ProductDialogBody;
