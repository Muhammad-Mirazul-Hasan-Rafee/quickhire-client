import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/SignUp/Signup";
import Login from "../pages/Login/Login";
import HotJobs from "../pages/HotJobs/HotJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import Companies from "../pages/Companies/Companies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2 className="text-center text-5xl">Router not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/alljobs",
        element: <HotJobs></HotJobs>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/myapplications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/addjobs",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/companies",
        element: <Companies></Companies>,
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
