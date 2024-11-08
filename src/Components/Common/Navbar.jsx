import { NavLink, useNavigate } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import fireIcon from "/images/fire.webp";
import DarkLight from "./DarkLight";
import RtlLtr from "./RtlLtr";

function Navbar() {
  const navigateHome = useNavigate();
  let navigateToHome = () => {
    navigateHome("/");
  };

  return (
    <>
      <nav
        id="nav"
        className="bg-slate-800 p-2 mb-2 container m-auto rounded-br-3xl rounded-bl-3xl shadow-xl flex"
      >
        <div
          className="bg-slate-950 rounded-bl-3xl -m-2 mr-2 flex justify-center items-center pl-2 pr-3 cursor-pointer min-w-[65px]"
          onClick={navigateToHome}
        >
          <img src={fireIcon} width={40} height={40} alt="" />
          <div
            className="uppercase text-xs text-slate-600 rotate-180"
            style={{ writingMode: "vertical-lr" }}
          >
            React Learning
          </div>
        </div>
        <ul className="flex gap-1 justify-center text-white flex-wrap">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
              }
              to="/employee-management-system"
            >
              EMS
            </NavLink>
          </li>
          <hr className="w-full my-1 border-t border-slate-900" />
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
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
                  ? "bg-slate-950 p-1.5 px-3 text-sm rounded-full text-slate-400 block"
                  : "bg-slate-900 p-1.5 px-3 text-sm rounded-full text-slate-400 block hover:bg-slate-950"
              }
              to="/redux"
            >
              Redux
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="mb-8 flex justify-center items-center gap-10"
        id="langRtl"
      >
        <DarkLight class="hidden" />
        <RtlLtr class="hidden" />
      </div>
    </>
  );
}

export default Navbar;
