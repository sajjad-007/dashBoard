import { Button, Input } from "@material-tailwind/react";
import React from "react";
import BannerTable from "../materialTailwind/BannerTable";
import { useForm } from "react-hook-form";
import {
  useUploadBannerMutation,
  useGetAllBannerQuery,
} from "../../feature/api/exclusive";
import { toastError, toastSuccess } from "../utility/toastify";
import { DNA } from "react-loader-spinner";
const BannerComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [uploadBanner, { isLoading: bannerLoading, isError }] =
    useUploadBannerMutation();
  const { data } = useGetAllBannerQuery();
  const handleBanner = async (data) => {
    try {
      // for postman form-data(image upload)
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("image", data.image[0]);
      const response = await uploadBanner(formdata);
      if (response?.data?.statusCode == 200) {
        console.log("response success", response);
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.log("error from handlebannerUpload", error);
      toastError();
    } finally {
      reset();
    }
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Banner upload part */}

      <form onSubmit={handleSubmit(handleBanner)}>
        <div className="flex flex-col gap-8">
          <div className="w-full max-w-md min-w-[200px]">
            <Input
              size="md"
              label="Banner Title"
              color="black"
              name="title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-600">This field is required*</span>
            )}
          </div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-600">This field is required*</span>
              )}
            </label>
          </div>
          {bannerLoading ? (
            <div className="mx-auto">
              <DNA
                visible={true}
                height="130"
                width="130"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          ) : (
            <Button
              type="submit"
              className="font-poppins bg-text2-black text-lg capitalize px-2 py-4 w-52 mb-4 mx-auto"
            >
              Upload
            </Button>
          )}
        </div>
      </form>
      {/* Banner upload part */}

      {/* banner details */}
      <div>
        <BannerTable />
      </div>
      {/* banner details */}
    </div>
  );
};

export default BannerComponent;
