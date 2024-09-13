import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notification from "./components/Notification/Notification";
import MainNavbar from "./components/Navbar/Navbar";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Notification />
    </>
  );
}
