import React, { useState } from 'react';
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from '@material-tailwind/react';
import { useFormik } from 'formik';
import { toastError, toastSuccess } from '../../utility/toastify';
import axios from 'axios';

const ProductDialogBody = ({ item, onClose, refetch }) => {
  // const [tempval,setTempVal] = useState(null)
  const [loading,setLoading] = useState(false)
  const initialValues = {
    name: item?.name || '',
    rating: item?.rating || '',
    color: item?.color || '',
    size: item?.size || '',
    price: item?.price || '',
    stock: item?.stock || '',
    category: item?.category?._id || '',
    subCategory: item?.subCategory?._id || '',
    discountPercentage: item?.discountPercentage || '',
    review: item?.review || '',
    description: item?.description || '',
  };
  // const getChangedFields = (values, original) => {
  //   const changed = {};
  //   Object.keys(values).forEach(key => {
  //     if (values[key] !== original[key]) {
  //       changed[key] = values[key];
  //     }
  //   });
  //   return changed;
  // };
  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: async values => {
      setLoading(true);
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_DOMAIN_URL}/product/${item?._id}`,
          values
        );
        // console.log('VITE_DOMAIN_NAME:', import.meta.env.VITE_DOMAIN_URL);

        if (response?.data?.statusCode == 200) {
          toastSuccess(response?.data?.message);
        }
      } catch (error) {
        toastError(error?.response?.data?.message);
        console.error('error from update product details', error);
      } finally {
        //
        setLoading(false);
        //close my modal 
        onClose?.();
        // refetch my products
        refetch();
        
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="main-div flex flex-col gap-7 py-6 ">
        <div className="flex gap-4">
          <Input
            size="md"
            label="Product Name"
            color="black"
            type="text"
            name="name"
            className="py-5"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            size="md"
            label="Current Stock"
            color="black"
            name="stock"
            className=" py-5"
            type={'number' || 'text'}
            onChange={formik.handleChange}
            value={formik.values.stock}
          />
        </div>
        <div className="flex gap-4">
          <Input
            size="md"
            label="Color"
            color="black"
            name="color"
            className=" py-5 "
            type="text"
            onChange={formik.handleChange}
            value={formik.values.color}
          />
          <Input
            size="md"
            label="Size"
            color="black"
            name="size"
            className=" py-5 "
            type="text"
            onChange={formik.handleChange}
            value={formik.values.size}
          />
        </div>
        <div className="flex gap-4">
          <Input
            size="md"
            label="Price"
            color="black"
            name="price"
            className=" py-5 "
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <Input
            size="md"
            label="Discount Percentange"
            color="black"
            name="discountPercentage"
            className=" py-5 "
            type="number"
            onChange={formik.handleChange}
            value={formik.values.discountPercentage}
          />
        </div>
        <div className="flex gap-4">
          <Input
            size="md"
            label="Enter Category ID"
            color="black"
            name="category"
            className=" py-5 "
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          <Input
            size="md"
            label="Enter Sub Category ID"
            color="black"
            name="subCategory"
            className=" py-5 "
            onChange={formik.handleChange}
            value={formik.values.subCategory}
          />
        </div>
        <div className="flex gap-4 ">
          <Input
            size="md"
            label="total review"
            color="black"
            name="review"
            className=" py-5 "
            onChange={formik.handleChange}
            value={formik.values.review}
          />
          <Input
            size="md"
            label="Rating"
            type="number"
            color="black"
            name="rating"
            className=" py-5 "
            onChange={formik.handleChange}
            value={formik.values.rating}
          />
        </div>
        <div className="flex gap-4 items-center">
          {/* Image upload part */}
          {/* <div className="flex items-center justify-center w-full ">
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
                multiple
                name="image"
              />
            </label>
          </div> */}

          {/* Image upload part */}

          <Textarea
            label="Product Description....."
            className="h-[30px]"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <Button variant="gradient" color="green" type="submit">
          <span>Update</span>
        </Button>
      </div>
    </form>
  );
};

export default ProductDialogBody;
