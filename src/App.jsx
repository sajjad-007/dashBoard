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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path="/"  element={<Home/>} >
      <Route path="/banner" element={<Banner/>}/>
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
