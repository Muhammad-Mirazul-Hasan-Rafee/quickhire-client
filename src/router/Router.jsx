import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/SignUp/Signup";
import Login from "../pages/Login/Login";
import HotJobs from "../pages/HotJobs/HotJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2 className="text-center text-5xl">Router not found</h2>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/login",
        element: <Login></Login>
        },
        {
         
         path:"/alljobs",
        element: <HotJobs></HotJobs>,
        loader:()=>fetch('http://localhost:5000/jobs'),
       }
    

    ]
  },
]);
export default router;