import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Pages/HomePage/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import LoginLayout from "./layouts/LoginLayout.jsx";
import Login from "./components/Pages/LoginPage/Login/Login.jsx";
import Register from "./components/Pages/LoginPage/Register/Register.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:'/reviews',
        element: <Reviews></Reviews>
      }
    ],
  },
  {
    path: "/user",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/user/login",
        element: <Login></Login>,
      },
      {
        path: "/user/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
