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
import UseEffectComponent from "../Hooks/UseEffect/UseEffectComponent";
import UseContextComponent from "../Hooks/UseContext/UseContextComponent";
import UseRefComponent from "../Hooks/UseRef/UseRefComponent";
import UseMemoComponent from "../Hooks/UseMemo/UseMemoComponent";
import UseCallbackComponent from "../Hooks/UseCallback/UseCallbackComponent";
import ConditionalRendering from '../ConditionalRendering/ConditionalRendering';
import LiftingStateUp from '../LiftingStateUp/LiftingStateUp';
import CrudUser from '../CrudUser/CrudUser'
import CreateUser from '../CrudUser/CreateUser';
import EditUser from '../CrudUser/EditUser';
import Hoc from '../Hoc/Hoc';
import ReactHookForm from '../ReactHookForm/ReactHookForm';
import TanStack from '../TanStack/TanStack'
  import TanStackProduct from '../TanStack/TanStackProduct'
import Redux from '../Redux/Redux'
import NotFound from "./NotFound";

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
          <UseEffectComponent/>
        </>
    },
    {
      path: "/usecontext",
      element:
        <>
          <Navbar />
          <UseContextComponent/>
        </>
    },
    {
      path: "/useref",
      element:
        <>
          <Navbar />
          <UseRefComponent/>
        </>
    },
    {
      path: "/usememo",
      element:
        <>
          <Navbar />
          <UseMemoComponent/>
        </>
    },
    {
      path: "/usecallback",
      element:
        <>
          <Navbar />
          <UseCallbackComponent/>
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
      path: "/crud-user",
      element:
        <>
          <Navbar />
          <CrudUser/>
        </>,
    },
    {
      path: "/crud-user/create-user",
      element: <>
        <Navbar />
        <CreateUser/>
      </>
    },
    {
      path: "/crud-user/edit-user",
      element: <>
        <Navbar />
        <EditUser/>
      </>
    },
    {
      path: "/hoc",
      element: <>
        <Navbar />
        <Hoc/>
      </>
    },
    {
      path: "/react-hook-form",
      element: <>
        <Navbar />
        <ReactHookForm/>
      </>
    },
    {
      path: "/tanstack",
      element: <>
        <Navbar />
        <TanStack/>
      </>
    },
    {
      path: "/tanstack/:productid",
      element: <>
        <Navbar />
        <TanStackProduct/>
      </>
    },
    {
      path: "/redux",
      element: <>
        <Navbar />
        <Redux/>
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