import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  Typography,
  Dialog,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  useDeleteSubCategoryMutation,
  useGetAllCategoryQuery,
  useGetAllSubCategoryQuery,
  useUpdateSubCategoryMutation,
  useUploadSubCategoryMutation,
} from "../../feature/api/exclusive";
import { useForm } from "react-hook-form";
import { DNA } from "react-loader-spinner";
import { toastError, toastSuccess } from "../utility/toastify";

const TABLE_HEAD = ["SubCategory", "Category", "product", "Edit/Delete"];

const SubCategoryComnent = () => {
  // ALL STATE START
  const [open, setOpen] = React.useState(false);
  const [tempState, setTempState] = useState({});
  const [userCatVal, setUserCatVal] = useState({
    name: "",
    category: "",
  });
  const [deleteLoading, setDeleteLoading] = useState(null);
  // react form hook
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  // rtk query data fetching, all query or mutation start
  const {
    data,
    isLoading: getLoading,
    isError: getError,
  } = useGetAllSubCategoryQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetAllCategoryQuery();
  const [uploadSubCategory, { isLoading: upSubCategoryLoading }] =
    useUploadSubCategoryMutation();
  const [updateSubCategory, { isLoading: updateSubCatLoading }] =
    useUpdateSubCategoryMutation();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  //upload sub-category / ALL HANDLER START START
  const handleUploadSubCat = async (data) => {
    setTempState(data);
    try {
      const response = await uploadSubCategory(data);
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from handle upload subCategory", error);
    } finally {
      reset();
    }
  };

  const handleOpen = (item) => {
    setTempState(item);
    setOpen(!open);
  };
  const handleUpdateSubCategory = async () => {
    try {
      const response = await updateSubCategory({
        ...userCatVal,
        id: tempState._id,
      });
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from handle update subcategory", error);
      toastError(error?.data?.message);
    } finally {
      reset();
      setOpen(!open);
    }
  };
  //handle delete
  const handleDelete = async (subid) => {
    setDeleteLoading(subid);
    try {
      const response = await deleteSubCategory(subid);
      console.log(response)
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from handle delete", error);
    }finally{
      setDeleteLoading(null)
    }
  };
  // ALL HANDLER ENDS HERE
  return (
    <div className="flex flex-col gap-12">
      {/*  upload part */}
      <div>
        {/* Subcategory title */}
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit(handleUploadSubCat)}
        >
          <div className="w-full  min-w-[200px]">
            <Input
              size="md"
              label="Sub Category Name"
              color="black"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* Select option */}
          <div className="w-full">
            {!categoryLoading && (
              <Select
                label="Select Category"
                name="category"
                value={watch("category")}
                onChange={(e) => setValue("category", e)}
                onBlur={() => trigger("category")}
                // {...register("category"}
              >
                {categoryData?.data
                  ?.slice()
                  ?.reverse()
                  ?.map((item) => (
                    <Option key={item?._id} value={item?._id}>
                      {item?.name}
                    </Option>
                  ))}
              </Select>
            )}

            {errors.category && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/* Select option  */}
          {/* upload button */}
          {upSubCategoryLoading ? (
            <div className="mx-auto">
              <DNA
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          ) : (
            <Button
              type="submit"
              className="font-poppins bg-text2-black text-md capitalize px-6 py-4 mx-auto"
            >
              Create SubCategory
            </Button>
          )}
        </form>
      </div>
      {/*  upload part */}

      {/* category table */}
      <div>
        {/* table lists */}
        <Card className="h-[500px] w-full overflow-y-scroll">
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
                ?.map((item, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.category?.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.product?.length}
                      </Typography>
                    </td>
                    <td className="p-4 ">
                      <div className="flex gap-[4px] justify-center">
                        {deleteLoading == item?._id ? (
                          <div className="mx-auto">
                            <DNA
                              visible={true}
                              height="100"
                              width="100"
                              ariaLabel="dna-loading"
                              wrapperStyle={{}}
                              wrapperClass="dna-wrapper"
                            />
                          </div>
                        ) : (
                          <div className="flex gap-[6px] justify-center">
                            <Button
                              color="green"
                              onClick={() => handleOpen(item)}
                            >
                              Edit
                            </Button>
                            <Button
                              color="red"
                              onClick={() => handleDelete(item?._id)}
                            >
                              Del
                            </Button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
        {/* table lists */}

        {/* Edit's modal */}
        <Dialog open={open} handler={handleOpen} className="p-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <DialogBody>
              <div className="flex flex-col gap-8">
                <div className="w-full  min-w-[200px]">
                  <Input
                    size="md"
                    label="Sub Category Name"
                    color="black"
                    name="name"
                    onChange={(e) =>
                      setUserCatVal({ ...userCatVal, name: e.target.value })
                    }
                    defaultValue={tempState?.name}
                  />
                </div>

                {/* Select option */}
                <div className="w-full">
                  {!categoryLoading && (
                    <Select
                      label="Select Category2"
                      name="category"
                      onChange={(value) =>
                        setUserCatVal({
                          ...userCatVal,
                          category: value,
                        })
                      }
                    >
                      {categoryData?.data
                        ?.slice()
                        ?.reverse()
                        ?.map((item) => (
                          <Option key={item?._id} value={item?._id}>
                            {tempState?.category?.name !== item?.name &&
                              item?.name}
                          </Option>
                        ))}
                    </Select>
                  )}
                </div>
              </div>
            </DialogBody>
            {updateSubCatLoading ? (
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
              <DialogFooter className="mt-4">
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  type="submit"
                  onClick={handleUpdateSubCategory}
                >
                  <span>Update</span>
                </Button>
              </DialogFooter>
            )}
          </form>
        </Dialog>
      </div>
      {/* category table */}
    </div>
  );
};

export default SubCategoryComnent;
