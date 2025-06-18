// import { Button } from "@material-tailwind/react"
import Sidebar from "./component/Sidebar.jsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Banner from "./pages/banner/Banner.jsx";
import Category from "./pages/category/Category.jsx";
import SubCategory from "./pages/subCategory/SubCategory.jsx";
import FlashSale from "./pages/flashSale/FlashSale.jsx";
import BrowseByCategory from "./pages/BrowseByCategory/BrowseByCategory.jsx";
import BestSelling from "./pages/bestSelling/BestSelling.jsx";
import Product from "./pages/Product/Product.jsx";
import ProductList from "./pages/Product/ProductList.jsx";
import Order from "./pages/order/Order.jsx";
import SingleOrder from "./pages/order/SingleOrder.jsx";
import ContactList from "./pages/contactList/ContactList.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}>
          <Route path="/banner" element={<Banner />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/flashsale" element={<FlashSale />} />
          <Route path="/browsebycategory" element={<BrowseByCategory />} />
          <Route path="/bestselling" element={<BestSelling />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/:id" element={<SingleOrder />} />
          <Route path="/contactlist" element={<ContactList />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
