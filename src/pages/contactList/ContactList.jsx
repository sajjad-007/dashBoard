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
import EditModal from "./EditModal";
// import ProductDialogBody from "./ProductDialogBody";

const ProductComponentBottom = () => {
  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      phoneNumber: "015874987",
      email: "helloworld@gmail.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      name: 'Samsung Pro 17"',
      phoneNumber: "012871697",
      email: "helloworld@gmail.com",
      image: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
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
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone Number</th>
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
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.phoneNumber}</td>
              <td className="px-6 py-4">
                <div className="flex gap-[4px] justify-center">
                  <Button color="green" onClick={handleOpen}>
                    View
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
          <EditModal/>
          {/* body content page */}
        </DialogBody>
        <DialogFooter className="mt-4">
          <Button
            variant="gradient"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ProductComponentBottom;
