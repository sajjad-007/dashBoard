import React, { useState } from 'react';
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
} from '@material-tailwind/react';
import {
  useCreateFlashSaleMutation,
  useDeleteFlashSaleMutation,
  useGetAllFlashSaleQuery,
  useGetAllProductsQuery,
  useUpdateFlashSaleMutation,
} from '../../feature/api/exclusive';
import { toastError, toastSuccess } from '../utility/toastify';
import { useFormik } from 'formik';

const TABLE_HEAD = ['Flash Sale Name', 'Product Name', 'Image', 'Edit/Delete'];

const FlashsaleComponent = () => {
  //All product data
  const {
    data: productData,
    isLoading: productLoading,
    isError,
  } = useGetAllProductsQuery();
  //create flash sale
  const [createFlashSale, { isLoading: flashLoading }] =
    useCreateFlashSaleMutation();
  //get all flash sale
  const { data: flashData, isLoading: flashDataLoading,refetch } =
    useGetAllFlashSaleQuery();
  //delete flash sale product
  const [deleteFlashSale, { isLoading: flashSaleDelete }] =
    useDeleteFlashSaleMutation();
  //update flash sale product
  const [updateFlashSale,{isLoading: updateFlashLoading}] = useUpdateFlashSaleMutation();
  // useState for flash sale delete
  const [delFlashId, setDelFlashId] = useState(null);
  const [tempVal, setTempVal] = useState(null);
  const [open, setOpen] = useState(false);

  //upload flash sale
  const [flashInput, setFlashInput] = useState({
    name: '',
    product: '',
  });
  //handle flash's title value
  const handleInputVal = e => {
    const { name, value } = e.target;
    setFlashInput({ ...flashInput, [name]: value });
  };
  //handle my select's value
  const handleProductVal = value => {
    setFlashInput({ ...flashInput, product: value });
  };
  //submit my all values
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await createFlashSale(flashInput);
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      toastError(error?.response?.data?.message);
      console.log('error from uploadProduct', error);
    }
  };
  // handle delete falsh sale
  const handleDelete = async flashId => {
    setDelFlashId(flashId);
    try {

      const response = await deleteFlashSale(flashId);
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
      toastError(error?.response?.data?.message);
      console.log('error from delete flash sale', error);
    }
  };

  // Flash Sale Modal Update part start
  const handleOpen = item => {
    setTempVal(item);
    setOpen(!open);
  };
  const [upProduct,setUpProduct] = useState({
    name:'',
    product: ''
  })
  const handleUpdateName = (e) =>{
    const {name,value} = e.target;
    setUpProduct({...upProduct,[name]:value})
  }
  const handleUpdateProduct = (value) =>{
    setUpProduct({...upProduct, product: value})
  }
  //handle update modal
  const handleUpadteModal = async(e) =>{
    try {
      const response = await updateFlashSale({...upProduct, id: tempVal?._id});
      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data?.message);
      }
    } catch (error) {
       toastError(error?.response?.data?.message);
      console.error("error from handle update modal",error)
    }finally{
      setOpen(!open);
      refetch();
    }
    // console.log(upProduct)
  }
  return (
    <div className="flex flex-col gap-12">
      {/*  upload part */}
      <form>
        <div className="flex flex-col gap-8">
          {/* Subcategory title */}
          <div className="w-full  min-w-[200px]">
            <Input
              size="md"
              label="Flash Sale Name"
              color="black"
              name="name"
              type="text"
              onChange={handleInputVal}
              value={flashInput.name}
            />
          </div>

          {/* Select option */}
          <div className="w-full">
            {!productLoading && (
              <Select
                label="Select Product"
                name="product"
                onChange={handleProductVal}
                value={flashInput.product}
              >
                {productData?.data?.map(item => (
                  <Option key={item._id} value={item._id}>
                    {item?.name}
                  </Option>
                ))}
              </Select>
            )}
          </div>
          {/* Select option  */}

          {/* upload button */}
          <div className="flex items-center gap-10">
            {flashLoading ? (
              <Button className="font-poppins bg-text2-black text-md capitalize px-6 py-4 ">
                Loading.....
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={handleSubmit}
                className="font-poppins bg-text2-black text-md capitalize px-6 py-4 "
              >
                Create Flash Sale
              </Button>
            )}

            <Button className="font-poppins bg-text2-black text-md capitalize px-6 py-4 ">
              Search Flash Sale
            </Button>
          </div>
        </div>
      </form>
      {/*  upload part */}

      {/* category table */}
      <div>
        {/* table lists */}
        <Card className="h-[500px] w-full overflow-y-scroll">
          <table className="w-full min-w-max table-auto text-center">
            <thead className="sticky top-0 z-10">
              <tr>
                {TABLE_HEAD.map(head => (
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
              {flashData?.data?.map(item => (
                <tr key={item?._id} className="even:bg-blue-gray-50/50">
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
                      {item?.product?.name}
                    </Typography>
                  </td>
                  <td className="p-4 w-[120px] h-[120px]">
                    <img
                      src={item?.product?.image[0]}
                      alt="not found"
                      className="w-full h-full object-cover"
                    />
                  </td>
                  <td className="p-4 ">
                    <div className="flex gap-[4px] justify-center">
                      <Button color="green" onClick={() => handleOpen(item)}>
                        Edit
                      </Button>
                      {delFlashId === item?._id ? (
                        <Button color="red" disabled>
                          Loading
                        </Button>
                      ) : (
                        <Button
                          color="red"
                          onClick={() => handleDelete(item?._id)}
                        >
                          Del
                        </Button>
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
        {/* <form> */}
          <Dialog open={open} handler={handleOpen} className="p-4">
            <DialogBody>
              <div className="flex flex-col gap-8">
                <div className="w-full  min-w-[200px]">
                  <Input
                    size="md"
                    label="Flash Sale name"
                    color="black"
                    name="name"
                    onChange={handleUpdateName}
                    value={upProduct.name}
                    defaultValue={tempVal?.name}
                  />
                </div>

                {/* Select option */}
                <div className="w-full">
                  <Select
                    label="Select Product"
                    name="product"
                    onChange={handleUpdateProduct}
                    value={upProduct.product}
                  >
                    {productData?.data?.map(item => (
                      <Option key={item?._id} value={item?._id}>
                        {item?.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </DialogBody>
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
                type="submit"
                variant="gradient"
                color="green"
                onClick={handleUpadteModal}
              >
                <span>Update</span>
              </Button>
            </DialogFooter>
          </Dialog>
        {/* </form> */}
      </div>
      {/* category table */}
    </div>
  );
};

export default FlashsaleComponent;
