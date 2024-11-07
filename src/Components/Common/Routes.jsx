import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Ems from "../Ems/Ems";
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
          <Footer />
        </>
    },
    {
      path: "/employee-management-system",
      element:
        <>
          <Navbar />
          <Ems />
          <Footer />
        </>
    },
    {
      path: "/route-parameter/:id",
      element:
        <>
          <Navbar />
          <RouteParameter />
          <Footer />
        </>
    },
    {
      path: "/nested-routing",
      element:
        <>
          <Navbar />
          <NestedRouting />
          <Footer />
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
          <Footer />
        </>
    },
    {
      path: "/useeffect",
      element:
        <>
          <Navbar />
          <UseEffectComponent/>
          <Footer />
        </>
    },
    {
      path: "/usecontext",
      element:
        <>
          <Navbar />
          <UseContextComponent/>
          <Footer />
        </>
    },
    {
      path: "/useref",
      element:
        <>
          <Navbar />
          <UseRefComponent/>
          <Footer />
        </>
    },
    {
      path: "/usememo",
      element:
        <>
          <Navbar />
          <UseMemoComponent/>
          <Footer />
        </>
    },
    {
      path: "/usecallback",
      element:
        <>
          <Navbar />
          <UseCallbackComponent/>
          <Footer />
        </>
    },
    {
      path: "/conditional-rendering",
      element:
        <>
          <Navbar />
          <ConditionalRendering/>
          <Footer />
        </>
    },
    {
      path: "/lifting-state-up",
      element:
        <>
          <Navbar />
          <LiftingStateUp/>
          <Footer />
        </>
    },
    {
      path: "/crud-user",
      element:
        <>
          <Navbar />
          <CrudUser/>
          <Footer />
        </>,
    },
    {
      path: "/crud-user/create-user",
      element: <>
        <Navbar />
        <CreateUser/>
        <Footer />
      </>
    },
    {
      path: "/crud-user/edit-user",
      element: <>
        <Navbar />
        <EditUser/>
        <Footer />
      </>
    },
    {
      path: "/hoc",
      element: <>
        <Navbar />
        <Hoc/>
        <Footer />
      </>
    },
    {
      path: "/react-hook-form",
      element: <>
        <Navbar />
        <ReactHookForm/>
        <Footer />
      </>
    },
    {
      path: "/tanstack",
      element: <>
        <Navbar />
        <TanStack/>
        <Footer />
      </>
    },
    {
      path: "/tanstack/:productId",
      element: <>
        <Navbar />
        <TanStackProduct/>
        <Footer />
      </>
    },
    {
      path: "/redux",
      element: <>
        <Navbar />
        <Redux/>
        <Footer />
      </>
    },
    {
      path: "*",
      element:
        <>
          <Navbar />
          <NotFound />
          <Footer />
        </>
    },
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes