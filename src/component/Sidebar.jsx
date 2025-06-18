import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { AiFillPicture } from "react-icons/ai";
import { IoFlashSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdSell } from "react-icons/md";
import { RiAlignItemLeftFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa6";

const Sidebar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Dashboard
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <HomeIcon class="h-6 w-6 text-text2-black" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal capitalize"
              >
                home
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to={"/banner"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <AiFillPicture />
                    </span>
                  </ListItemPrefix>
                  banner
                </ListItem>
              </Link>
              <Link to={"/category"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <AiOutlineBars />
                    </span>
                  </ListItemPrefix>
                  Category
                </ListItem>
              </Link>
              <Link to={"/sub-category"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <HiBars3BottomLeft />
                    </span>
                  </ListItemPrefix>
                  sub category
                </ListItem>
              </Link>
              <Link to={"/flashsale"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <IoFlashSharp />
                    </span>
                  </ListItemPrefix>
                  flash Sale
                </ListItem>
              </Link>
              <Link to={"/bestselling"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl ">
                      <MdSell />
                    </span>
                  </ListItemPrefix>
                  Best selling
                </ListItem>
              </Link>

              <Link to={"/browsebycategory"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <BiSolidCategory />
                    </span>
                  </ListItemPrefix>
                  browse by category
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal capitalize"
              >
                e-commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to={"/product"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <RiAlignItemLeftFill />
                    </span>
                  </ListItemPrefix>
                  Products
                </ListItem>
              </Link>
              <Link to={"/productlist"}>
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <FaClipboardList />
                    </span>
                  </ListItemPrefix>
                  Product Lists
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <Link to="/order">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Order
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/contactlist">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact List
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
