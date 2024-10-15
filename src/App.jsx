import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import RouteParameter from "./Components/RouteParameter";
import BasicReact from "./Components/BasicReact/BasicReact";
import NotFound from "./Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/route-parameter/:id",
    element: (
      <>
        <Navbar />
        <RouteParameter />
      </>
    ),
  },
  {
    path: "/basic-react",
    element: (
      <>
        <Navbar />
        <BasicReact />
      </>
    ),
    children: [{}, {}, {}],
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NotFound />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="bg-gray-900 h-screen text-center text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
