import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2 className="text-center text-5xl">Router not found</h2>,
    // children:[
    //     {
    //         path:"/",
    //         element:<Home></Home>
    //     },

    // ]
  },
]);
export default router;