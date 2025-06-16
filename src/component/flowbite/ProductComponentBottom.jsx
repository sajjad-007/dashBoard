import { Button } from "@material-tailwind/react";
import React from "react";

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
    // Add more product entries as needed
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <input
                id="checkbox-all"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </th>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Product name</th>
            <th className="px-6 py-3">Color</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Subcategory</th>
            <th className="px-6 py-3">Size</th>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Discount</th>
            <th className="px-6 py-3">Rating</th>
            <th className="px-6 py-3">Review</th>
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
              <td className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
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
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.subCategory}</td>
              <td className="px-6 py-4">{item.size}</td>
              <td className="px-6 py-4">{item.stock}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">{item.discountPercentage}</td>
              <td className="px-6 py-4">{item.rating}</td>
              <td className="px-6 py-4">{item.review}</td>
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
    </div>
  );
};

export default ProductComponentBottom;
