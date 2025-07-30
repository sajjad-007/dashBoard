import React, { useState } from 'react';
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from '@material-tailwind/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useUploadProductMutation,
} from '../../feature/api/exclusive';

const ProductComponentTop = () => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    rating: '',
    color: '',
    size: '',
    price: null,
    stock: null,
    category: '',
    subCategory: '',
    discountPercentage: null,
    review: '',
    description: '',
    image: '',
  });
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError,
  } = useGetAllCategoryQuery();
  // state for store cateogry's id
  const [singleCategoryId, setSingleCategoryId] = useState();
  // get single category from id
  const {
    data: singleCategoryData,
    isLoading: singleCategoryLoading,
    isError: singleCatError,
  } = useGetSingleCategoryQuery(singleCategoryId, {
    skip: !singleCategoryId, // This prevents fetching when singleCategorydId is null
  });
  //upload product
  const [uploadProduct, { isLoading: uploadLoading }] =
    useUploadProductMutation();
  //handle my all input value
  const handleInputChange = e => {
    const { name, value } = e.target;
    // Handle number inputs to convert them to numbers
    if (name === 'stock' || name === 'price' || name === 'discountPercentage') {
      setProductInfo({ ...productInfo, [name]: parseInt(value) });
    } else if (name === 'rating') {
      setProductInfo({ ...productInfo, [name]: parseFloat(value) });
    } else if (name === 'image') {
      setProductInfo({ ...productInfo, image: e.target.files[0] });
    } else {
      setProductInfo({ ...productInfo, [name]: value });
    }
    // console.log(productInfo);
  };
  //Handle react quill or description
  const handleDescription = value => {
    setProductInfo(prev => {
      return {
        ...prev,
        description: value,
      };
    });
  };
  // handle category select option
  const handleCategory = value => {
    setSingleCategoryId(value);
    setProductInfo({ ...productInfo, category: value });
  };
  // console.log(productInfo)
  const handleUploadProduct = async () => {
    try {
      const formData = new FormData();
      const response = await uploadProduct(productInfo);
      console.log(productInfo)
      if (response) {
        console.log('success', response);
      }
    } catch (error) {
      console.log('error from uploadProduct', error);
    }
  };
  return (
    <div className="main-div flex flex-col gap-7">
      {/* part one */}
      <div className="flex gap-4">
        <Input
          size="md"
          label="Product Name"
          color="black"
          className=" py-5"
          name="name"
          onChange={handleInputChange}
          value={productInfo.name}
        />
        <Input
          size="md"
          label="Rating"
          color="black"
          name="rating"
          onChange={handleInputChange}
          value={productInfo.rating}
          className=" py-5 "
          type="number"
        />
      </div>
      {/* part one end */}

      {/* part two start */}
      <div className="flex gap-4">
        <div className="w-full">
          <Select
            label="Select Color"
            color="black"
            name="color"
            onChange={value => {
              setProductInfo({ ...productInfo, color: value });
            }}
            value={productInfo.color}
          >
            <Option value="1">red</Option>
            <Option value="2">blue</Option>
            <Option value="3">green</Option>
            <Option value="4">purple</Option>
            <Option value="5">orange</Option>
          </Select>
        </div>
        <div className="w-full">
          <Select
            label="Select Size"
            color="black"
            name="size"
            onChange={value => {
              setProductInfo({ ...productInfo, size: value });
            }}
            value={productInfo.size}
          >
            <Option value="1">sm</Option>
            <Option value="2">lg</Option>
            <Option value="3">md</Option>
            <Option value="4">xl</Option>
          </Select>
        </div>
      </div>
      {/* part two end*/}

      {/* part three start */}
      <div className="flex gap-4">
        <Input
          size="md"
          label="Price"
          color="black"
          name="price"
          className=" py-5 "
          type="number"
          onChange={handleInputChange}
          value={productInfo.price}
        />
        <Input
          size="md"
          label="Discount Percentange"
          color="black"
          name="discountPercentage"
          className=" py-5 "
          type="number"
          onChange={handleInputChange}
          value={productInfo.discountPercentage}
        />
        <Input
          size="md"
          label="Current Stock"
          color="black"
          name="stock"
          className=" py-5 "
          type="number"
          onChange={handleInputChange}
          value={productInfo.stock}
        />
      </div>
      {/* part three end */}

      {/* part four start */}
      <div className="flex gap-4">
        <div className="w-full h-[60px]">
          {/* category section */}
          {!categoryLoading && (
            <Select
              label="Select Category"
              color="black"
              name="category"
              onChange={handleCategory}
              value={productInfo.category}
              className="h-full w-full"
            >
              {/* <Option value="">Choose Sub Category</Option> */}
              {categoryData?.data?.map(item => (
                <Option key={item._id} value={item._id}>
                  {item?.name}
                </Option>
              ))}
            </Select>
          )}
        </div>
        {/* category section end */}

        {/* subCategory section start */}
        {singleCategoryData == null ? (
          <div className="w-full h-[60px]">
            <Select
              label="Select Sub Category"
              color="black"
              disabled
              className="h-full w-full"
            >
              <Option value="1">Choose Sub Category</Option>
            </Select>
          </div>
        ) : (
          <div className="w-full h-[60px]">
            <Select
              label="Select Sub Category"
              color="black"
              name="subCategory"
              onChange={value => {
                setProductInfo({ ...productInfo, subCategory: value });
              }}
              value={productInfo.subCategory}
              className="h-full w-full"
            >
              {singleCategoryData?.data?.subCategory?.map(item => (
                <Option value={item?._id} key={item?._id}>
                  {item?.name}
                </Option>
              ))}
            </Select>
          </div>
        )}
      </div>
      {/* part four end */}

      {/* Image upload part */}
      <div className="flex gap-4 h-[150px]">
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
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="image"
              onChange={handleInputChange}
            />
          </label>
        </div>
        {/* Image upload part */}
        {/* <Textarea label="Product Description" /> */}
        <Textarea
          label="Write Your Review"
          name="review"
          onChange={handleInputChange}
          value={productInfo.review}
          className="w-full h-full"
        />
      </div>
      {/* Image upload part end */}

      {/* Description part */}
      <ReactQuill
        theme="snow"
        className="h-[200px]"
        name="description"
        onChange={handleDescription}
        value={productInfo.description}
        placeholder="Write product description here..."
      />
      <div className="flex items-center justify-center mt-8">
        {uploadLoading ? (
          <Button className="font-poppins bg-text2-black text-md capitalize px-6 py-4 ">
            Loading....
          </Button>
        ) : (
          <Button
            type="submit"
            onClick={handleUploadProduct}
            className="font-poppins bg-text2-black text-md capitalize px-6 py-4 "
          >
            Create your product
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductComponentTop;
