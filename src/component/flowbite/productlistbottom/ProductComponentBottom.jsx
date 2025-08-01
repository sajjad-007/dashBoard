import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Option,
  Select,
} from '@material-tailwind/react';
import ProductDialogBody from './ProductDialogBody';
import {
  useDeleteProductsMutation,
  useGetAllProductsQuery,
} from '../../../feature/api/exclusive';
import ProductSkeleton from './ProductSkeleton';
import ErrorProduct from './ErrorProduct';
import { toastSuccess } from '../../utility/toastify';
import { DNA } from 'react-loader-spinner';

const ProductComponentBottom = () => {
  const { data, isLoading, isError, refetch } = useGetAllProductsQuery();
  //delete my product
  const [deleteProducts, { isLoading: delProLoading }] =
    useDeleteProductsMutation();
  // useState for delete product loading
  const [delLoading, setDelLoading] = useState(null);
  //state for edit part value
  const [editVal,setEditVal] = useState(null)
  // Pagination code is written by ChatGtp
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const productsData = data?.data?.slice()?.reverse() || [];
  const totalPages = Math.ceil(productsData.length / itemsPerPage);
  //slice method take two arguments, the first is the starting index and the second is the ending index
  // it returns a new array containing the elements from the original array starting from the starting index
  const paginatedProducts = productsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [open, setOpen] = useState(false);

  const handleOpen = item => {
    setEditVal(item);
    setOpen(!open);
  };
  //loading skeleton
  if (isLoading) {
    return <ProductSkeleton />;
  }
  //if get any error then refetch product anything
  const refetchFun = () => {
    return refetch();
  };
  if (isError) {
    return <ErrorProduct refetch={refetchFun} />;
  }

  //Delete product

  const handleDelPro = async id => {
    setDelLoading(id);
    try {
      const response = await deleteProducts(id);

      if (response?.data?.statusCode == 200) {
        toastSuccess(response?.data.message);
      }
    } catch (error) {
      toastError(error?.response?.data?.message);
      console.log('error from product delete', error);
    } finally {
      setDelLoading(null);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Main table  */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-2 py-2 text-center">Product name</th>
            <th className="px-2 py-2 text-center">Category</th>
            <th className="px-2 py-2 text-center">Subcategory</th>
            <th className="px-2 py-2 text-center">Stock</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2 text-center">Description</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts?.map(item => (
            <tr
              key={item._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm font-normal"
            >
              <td className="px-4 py-3">
                <img
                  src={item?.image[0] || item?.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white truncate max-w-[120px] font-normal text-sm text-center">
                {item?.name}
              </td>
              <td className="px-1 py-3 text-center">
                {item?.category ? item?.category?.name : 'none'}
              </td>
              <td className="px-1 py-3 text-center">
                {item?.subCategory ? item?.subCategory?.name : 'none'}
              </td>
              <td className="px-2 py-3 text-center text-sm">
                {item?.stock ?? '-'}
              </td>
              <td className="px-4 py-3 text-sm">{item.price}</td>
              <td
                className="px-4 py-3 w-[40px] truncate max-w-[150px] text-gray-700 text-sm"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></td>
              <td className="px-2 py-2">
                <div className="flex gap-2 justify-center">
                  <Button
                    color="green"
                    className="px-3 py-1 text-xs font-normal"
                    onClick={() => handleOpen(item)}
                  >
                    Edit
                  </Button>
                  {delLoading == item?._id ? (
                    <div className="mx-auto">
                      <DNA
                        visible={true}
                        height="35"
                        width="35"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                      />
                    </div>
                  ) : (
                    <Button
                      color="red"
                      className="px-3 py-1 text-xs font-normal"
                      onClick={() => handleDelPro(item._id)}
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
      {/* Pagination buttons, this code is written by ChatGtp*/}
      <div className="flex justify-center items-center gap-2 py-4">
        <Button
          size="sm"
          color="gray"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </Button>
        <span className="text-xs font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          size="sm"
          color="gray"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </div>
      {/* Edit button details */}
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={e => e.preventDefault()}>
          <DialogBody item={editVal}>
            {/* body content page */}
            <ProductDialogBody item={editVal} />
            {/* body content page */}
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
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Update</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default ProductComponentBottom;
