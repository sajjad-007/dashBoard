import React from "react";
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

const TABLE_HEAD = ["Name", "Category ID", "Image", "Edit/Delete"];
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
const FlashsaleComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex flex-col gap-12">
      {/*  upload part */}
      <div className="flex flex-col gap-8">
        {/* Subcategory title */}
        <div className="w-full  min-w-[200px]">
          <Input size="md" label="Flash Sale Name" color="black" name="title" />
        </div>

        {/* Select option */}
        <div className="w-full">
          <Select label="Select Product ID">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
          </Select>
        </div>
        {/* Select option  */}

        {/* upload button */}
        <div className="flex items-center gap-10">
          <Button className="font-poppins bg-text2-black text-md capitalize px-6 py-4 ">
            Create Flash Sale
          </Button>
          <Button className="font-poppins bg-text2-black text-md capitalize px-6 py-4 ">
            Search Flash Sale
          </Button>
        </div>
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
              {TABLE_ROWS.map(({ name, job, date }, index) => (
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
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4 ">
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
        </Card>
        {/* table lists */}

        {/* Edit's modal */}
        <Dialog open={open} handler={handleOpen} className="p-4">
          <DialogBody>
            <div className="flex flex-col gap-8">
              <div className="w-full  min-w-[200px]">
                <Input
                  size="md"
                  label="Sub Category Name"
                  color="black"
                  name="title"
                />
              </div>

              {/* Select option */}
              <div className="w-full">
                <Select label="Select Category ID">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
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
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Update</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      {/* category table */}
    </div>
  );
};

export default FlashsaleComponent;
