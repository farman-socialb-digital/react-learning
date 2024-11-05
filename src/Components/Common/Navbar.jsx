import { NavLink } from "react-router-dom";
import { SlHome } from "react-icons/sl";

function Navbar() {
  return (
    <ul className="bg-gray-700 flex gap-1 justify-center py-2 mb-10 text-white flex-wrap">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/"
        >
          <SlHome className="inline-block align-baseline" />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/route-parameter/anyparameter"
        >
          Route Parameter(useParams)
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
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
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/basic-react"
        >
          Basic React(useState)
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/useeffect"
        >
          useEffect
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/usecontext"
        >
          useContext
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/useref"
        >
          useRef
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/usememo"
        >
          useMemo
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/usecallback"
        >
          useCallback
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
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
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/lifting-state-up"
        >
          Lifting State Up
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/crud-user"
        >
          CRUD User
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/hoc"
        >
          HOC
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/react-hook-form"
        >
          React Hook Form
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/tanstack"
        >
          TanStack
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 p-1.5 px-3 text-sm rounded-full text-gray-400 block"
              : "bg-gray-800 p-1.5 px-3 text-sm rounded-full text-gray-400 block hover:bg-gray-950"
          }
          to="/redux"
        >
          Redux
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
