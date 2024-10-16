import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import RouteParameter from "./RouteParameter";
import NestedRouting from "../NestedRouting/NestedRouting";
  import Courses from "../NestedRouting/Courses";
  import Classes from "../NestedRouting/Classes";
  import Exam from "../NestedRouting/Exam";
  import Results from "../NestedRouting/Results";
import BasicReact from "../BasicReact/BasicReact";
import UseEffect from "../Hooks/UseEffect";
import ConditionalRendering from '../ConditionalRendering/ConditionalRendering';
import NotFound from "./NotFound";
import LiftingStateUp from '../LiftingStateUp/LiftingStateUp';

const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Navbar />
          <Home />
        </>
    },
    {
      path: "/route-parameter/:id",
      element:
        <>
          <Navbar />
          <RouteParameter />
        </>
    },
    {
      path: "/nested-routing",
      element:
        <>
          <Navbar />
          <NestedRouting />
        </>,
          children: [
            {
              path: "courses",
              element:
                <>
                  <Courses/>
                </>
            },
            {
              path: "classes",
              element:
                <>
                  <Classes/>
                </>
            },
            {
              path: "exam",
              element:
                <>
                  <Exam/>
                </>
            },
            {
              path: "results",
              element:
                <>
                  <Results/>
                </>
            }
          ],
    },
    {
      path: "/basic-react",
      element:
        <>
          <Navbar />
          <BasicReact />
        </>
    },
    {
      path: "/useeffect",
      element:
        <>
          <Navbar />
          <UseEffect/>
        </>
    },
    {
      path: "/conditional-rendering",
      element:
        <>
          <Navbar />
          <ConditionalRendering/>
        </>
    },
    {
      path: "/lifting-state-up",
      element:
        <>
          <Navbar />
          <LiftingStateUp/>
        </>
    },
    {
      path: "*",
      element:
        <>
          <Navbar />
          <NotFound />
        </>
    },
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes