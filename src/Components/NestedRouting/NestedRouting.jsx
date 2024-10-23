import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function NestedRouting() {
  return (
    <>
      <div className="max-w-[550px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">
          Nested Routing
        </p>
        <div className="m-4 my-5 flex gap-3 justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-green-950 p-2 px-4 w-2/5 rounded-full"
                : "bg-green-800 p-2 px-4 w-2/5 rounded-full hover:bg-green-950"
            }
            to="/nested-routing/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-950 p-2 px-4 w-2/5 rounded-full"
                : "bg-yellow-800 p-2 px-4 w-2/5 rounded-full hover:bg-yellow-950"
            }
            to="/nested-routing/classes"
          >
            Classes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 p-2 px-4 w-2/5 rounded-full"
                : "bg-blue-800 p-2 px-4 w-2/5 rounded-full hover:bg-blue-950"
            }
            to="/nested-routing/exam"
          >
            Exam
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-pink-950 p-2 px-4 w-2/5 rounded-full"
                : "bg-pink-800 p-2 px-4 w-2/5 rounded-full hover:bg-pink-950"
            }
            to="/nested-routing/results"
          >
            Results
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NestedRouting;
