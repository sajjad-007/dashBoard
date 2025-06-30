import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
  useUploadCategoryMutation,
} from "../../feature/api/exclusive";
import { toastError, toastSuccess } from "../utility/toastify";
import { DNA } from "react-loader-spinner";

const TABLE_HEAD = ["Name", "Image", "product", "subCategory", "Edit/Delete"];

const CategoryComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [uploadCategory, { isLoading: categoyLoading }] =
    useUploadCategoryMutation();
  const { data, isLoading: getallLoading, isError } = useGetAllCategoryQuery();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [open, setOpen] = useState(false);
  const [temp, setTemp] = useState({});
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [inputValue, setInputValue] = useState({
    name: "",
    image: "",
  });
  const handleOpen = ({ ...obj }) => {
    setTemp(obj);
    setOpen(!open);
  };

  const handleCategoryUp = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("image", data.image[0]);

      const response = await uploadCategory(formdata);

      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
      // console.log("response", response);
    } catch (error) {
      console.error("error from uploadCategory", error);
      toastError(error?.data?.message);
    } finally {
      reset();
    }
  };

  // update your category
  const handleUpdateCategory = async (data) => {
    try {
      const response = await updateCategory({ ...inputValue, id: temp._id });
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from update category", error);
      toastError(error?.data?.message);
    } finally {
      reset();
      setTimeout(() => {
        setOpen(!open);
      }, 500);
    }
  };
  //handle delete category
  const handleDelete = async (id) => {
    setDeleteLoading(id);
    try {
      const response = await deleteCategory(id);
     if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from handle delete", error);
    }finally{
      setDeleteLoading(null)
    }
  };
  return (
    <div className="flex flex-col gap-12">
      {/*  upload part */}
      <form onSubmit={handleSubmit(handleCategoryUp)}>
        <div className="flex flex-col gap-8">
          {/* banner title */}
          <div className="w-full max-w-md min-w-[200px]">
            <Input
              size="md"
              label="Category Name"
              color="black"
              name="name"
              {...register("name", { required: true })}
              // {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">This is required*</span>
            )}
          </div>
          {/* file upload */}
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                {errors.image && (
                  <span className="text-red-600">This field is required*</span>
                )}
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                name="image"
                {...register("image", { required: true })}
                // {...register("image")}
              />
            </label>
          </div>
          {/* upload button */}
          {categoyLoading ? (
            <div className="mx-auto">
              <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          ) : (
            <Button
              type="submit"
              className="font-poppins bg-text2-black text-lg capitalize px-4 py-4 w-52 mx-auto"
            >
              Create Category
            </Button>
          )}
        </div>
      </form>
      {/*  upload part */}

      {/* category table */}
      <div>
        {/* table lists */}
        <Card className="h-[600px] w-full overflow-y-scroll">
          <table className="w-full min-w-max table-auto text-center">
            <thead className="sticky top-0 z-10">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="big"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data
                ?.slice()
                ?.reverse()
                ?.map(({ name, image, product, subCategory, _id }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div className="h-28 w-28 mx-auto">
                        <img
                          src={image}
                          alt="not found"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {product.length}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {subCategory.length}
                      </Typography>
                    </td>
                    <td className="p-4 ">
                      {deleteLoading === _id ? (
                        <div className="mx-auto">
                          <DNA
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                          />
                        </div>
                      ) : (
                        <div className="flex gap-[4px] justify-center">
                          <Button
                            color="green"
                            onClick={() => handleOpen({ name, image, _id })}
                          >
                            Edit
                          </Button>
                          <Button color="red" onClick={() => handleDelete(_id)}>
                            Del
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
        {/* table lists */}

        {/* Edit's modal */}
        <Dialog open={open} handler={handleOpen}>
          <form onSubmit={(e) => e.preventDefault()}>
            <DialogBody>
              <div className="flex flex-col gap-8">
                {/* banner name field */}
                <div className="w-full max-w-md min-w-[200px]">
                  <Input
                    size="md"
                    label="Category Name"
                    color="black"
                    name="name"
                    defaultValue={temp.name}
                    onChange={(e) =>
                      setInputValue({ ...inputValue, name: e.target.value })
                    }
                  />
                </div>
                {/* category image field */}
                {/* we must change our (<input id="dropzone-file2"/>) name */}
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[250px] w-[80%]">
                    <img
                      src={temp.image}
                      alt="not found"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label
                    htmlFor="dropzone-file2"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file2"
                      type="file"
                      className="hidden"
                      name="image"
                      onChange={(e) =>
                        setInputValue({
                          ...inputValue,
                          image: e.target.files[0],
                        })
                      }
                    />
                  </label>
                </div>
              </div>
            </DialogBody>
            <DialogFooter className="mt-4">
              {updateLoading ? (
                <div className="mx-auto ">
                  <DNA
                    visible={true}
                    height="110"
                    width="110"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </div>
              ) : (
                <>
                  <Button color="red" onClick={handleOpen} className="mr-6">
                    cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    color="green"
                    onClick={handleUpdateCategory}
                  >
                    <span>Update</span>
                  </Button>
                </>
              )}
            </DialogFooter>
          </form>
        </Dialog>
      </div>
      {/* category table */}
    </div>
  );
};

export default CategoryComponent;
