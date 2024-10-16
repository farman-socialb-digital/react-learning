import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="bg-gray-700 flex gap-2 justify-center py-2 mb-10 text-white flex-wrap">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/route-parameter/anyparameter"
        >
          Route Parameter
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/nested-routing/"
        >
          Nested Routing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/basic-react"
        >
          Basic React
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/useeffect"
        >
          UseEffect
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/conditional-rendering"
        >
          Conditional Rendering
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-2 px-4 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-2 px-4 text-sm rounded-full text-gray-400 block"
          }
          to="/lifting-state-up"
        >
          Lifting State Up
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;