import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Home from "./screen/home";
import Navbar from "./screen/navbar";
import BloodDonateSignup from './screen/signup'
import Loder from "./screen/loding";
import SignIn from "./screen/signin";
import Request from "./screen/request";
import BloodDonationForm from "./screen/donate";
import DoctorList from "./screen/doctor";
import About from "./screen/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loder /> ,
  },
  {
    path: "/home",
    element: <> <Navbar />  <Home /> </>,
  },
  {
    path: "/signin",
    element: <>   <SignIn /> </>,
  },
  {
    path: "/donate",
    element: <>   <BloodDonationForm /> </>,
  },
  {
    path: "/signup",
    element: <>  <BloodDonateSignup /> </>,
  },
  {
    path: "/request",
    element: <>  <Request /> </>,
  },
  {
    path: "/doctor",
    element: <>  <DoctorList /> </>,
  },
  {
    path: "/about",
    element: <>  <About /> </>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
