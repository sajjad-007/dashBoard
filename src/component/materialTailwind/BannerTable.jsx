import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import {
  useDeleteBannerMutation,
  useGetAllBannerQuery,
  useUpdateBannerMutation,
} from "../../feature/api/exclusive";
import { toastError, toastSuccess } from "../utility/toastify";
import { DNA } from "react-loader-spinner";

const TABLE_HEAD = ["Title", "Image", "Edit/Delete"];

const BannerTable = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { data } = useGetAllBannerQuery();
  const [updateBanner, { isLoading: updateLoading }] =
    useUpdateBannerMutation();
  const [deleteBanner] = useDeleteBannerMutation();
  const [deleteLoading, setDeleteLoading] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [temp, setTemp] = useState({});
  const [uservalue, setUserValue] = useState({
    title: "",
    image: "",
  });

  const handleOpen = ({ ...obj }) => {
    setTemp(obj);
    setOpen(!open);
  };
  const handleUpdate = async () => {
    try {
      const response = await updateBanner({ ...uservalue, id: temp._id });
      if (response) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from handleUpdate", error);
      // toastError(response?.data?.error);
    } finally {
      setOpen(false);
    }
  };
  const handleDelete = async (id) => {
    setDeleteLoading(id);
    try {
      const response = await deleteBanner(id);
      if (response) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      console.error("error from handleDelete", error);
    } finally {
      setDeleteLoading(null);
    }
  };
  return (
    <div>
      {/* table lists */}
      <Card className="h-[700px] w-full overflow-y-scroll">
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
              ?.map(({ title, image, _id }) => (
                <tr key={_id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="medium"
                      color="blue-gray"
                      className="font-normal uppercase"
                    >
                      {title}
                    </Typography>
                  </td>

                  <td className="py-4">
                    <div className=" w-[170px] h-[170px] mx-auto">
                      <img
                        src={image}
                        alt="not found"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-4 ">
                    <div className="flex mx-auto justify-center">
                      {deleteLoading == _id ? (
                        <DNA
                          visible={true}
                          height="70"
                          width="70"
                          ariaLabel="dna-loading"
                          wrapperStyle={{}}
                          wrapperClass="dna-wrapper"
                        />
                      ) : (
                        <div className="flex gap-2">
                          <Button
                            color="green"
                            onClick={() => handleOpen({ title, image, _id })}
                          >
                            Edit
                          </Button>
                          <Button color="red" onClick={() => handleDelete(_id)}>
                            Delete
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
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogBody>
            <div className="flex flex-col gap-8">
              <div className="w-full max-w-md min-w-[200px]">
                <Input
                  size="md"
                  label="Banner Title"
                  color="black"
                  name="title"
                  defaultValue={temp.title}
                  onChange={(e) =>
                    setUserValue({ ...uservalue, title: e.target.value })
                  }
                  // {...register(temp.title)}
                />
              </div>
              {/* we must change our (<input id="dropzone-file2"/>) name */}
              <div className="flex items-center gap-5  justify-center w-full">
                <div className="h-[full] w-[89%] rounded-xl">
                  <img
                    src={temp.image}
                    alt="not found"
                    className="w-full h-full object-contain"
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file2"
                    type="file"
                    className="hidden"
                    // {...register(temp.image)}
                    onChange={(e) =>
                      setUserValue({ ...uservalue, image: e.target.files[0] })
                    }
                  />
                </label>
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="mt-4">
            <Button color="red" onClick={handleOpen} className="mr-6">
              cancel
            </Button>
            {updateLoading ? (
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            ) : (
              <Button
                variant="gradient"
                color="green"
                onClick={handleUpdate}
                type="submit"
              >
                Update
              </Button>
            )}
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default BannerTable;
