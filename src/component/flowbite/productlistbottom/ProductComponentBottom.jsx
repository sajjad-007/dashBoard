import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import ProductDialogBody from "./ProductDialogBody";

const ProductComponentBottom = () => {
  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      subCategory: "Apple",
      price: "$2999",
      stock: 20,
      rating: 4.5,
      size: "17 inch",
      discountPercentage: "10%",
      review: "Excellent performance.",
      image: "https://via.placeholder.com/50",
      description: "A high-performance laptop with sleek design.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      subCategory: "Microsoft",
      price: "$1999",
      stock: 15,
      rating: 4.2,
      size: "13 inch",
      discountPercentage: "12%",
      review: "Lightweight and powerful.",
      image: "https://via.placeholder.com/50",
      description: "A portable laptop and tablet in one.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      subCategory: "Microsoft",
      price: "$1999",
      stock: 15,
      rating: 4.2,
      size: "13 inch",
      discountPercentage: "12%",
      review: "Lightweight and powerful.",
      image: "https://via.placeholder.com/50",
      description: "A portable laptop and tablet in one.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      subCategory: "Microsoft",
      price: "$1999",
      stock: 15,
      rating: 4.2,
      size: "13 inch",
      discountPercentage: "12%",
      review: "Lightweight and powerful.",
      image: "https://via.placeholder.com/50",
      description: "A portable laptop and tablet in one.",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Main table  */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Product name</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Subcategory</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.subCategory}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">
                <div className="flex gap-[4px] justify-center">
                  <Button color="green" onClick={handleOpen}>
                    Edit
                  </Button>
                  <Button color="red">Del</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit button details */}
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          {/* body content page */}
          <ProductDialogBody />
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
      </Dialog>
    </div>
  );
};

export default ProductComponentBottom;
