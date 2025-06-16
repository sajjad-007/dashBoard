// import { Button } from "@material-tailwind/react"
import Sidebar from "./component/Sidebar.jsx"
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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path="/"  element={<Home/>} >
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/sub-category" element={<SubCategory/>}/>
     </Route>
    )
  );

  return (
   <>
      <RouterProvider router={router} />
   </>
  )
}

export default App
