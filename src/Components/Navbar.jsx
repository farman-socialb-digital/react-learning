import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="bg-gray-700 flex gap-3 justify-center py-5 mb-10 text-white">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-3 px-5 rounded-full text-gray-400"
              : "bg-gray-800 p-3 px-5 rounded-full text-gray-400"
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
              ? "bg-gray-950 p-3 px-5 rounded-full text-gray-400"
              : "bg-gray-800 p-3 px-5 rounded-full text-gray-400"
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
              ? "bg-gray-950 p-3 px-5 rounded-full text-gray-400"
              : "bg-gray-800 p-3 px-5 rounded-full text-gray-400"
          }
          to="/basic-react"
        >
          Basic React
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
