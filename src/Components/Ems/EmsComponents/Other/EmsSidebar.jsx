import { Link } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import fireIcon from "/images/fire.webp";

function Sidebar(props) {
  return (
    <div className="fixed inset-y-0 left-0 z-10 w-64 overflow-y-auto transition duration-300 transform bg-slate-950 lg:translate-x-0 lg:static lg:inset-0">
      <div className="flex items-center justify-center py-3 bg-slate-900">
        <div className="flex items-center">
          <img src={fireIcon} width={20} height={20} alt="" />
          <span className="mx-2 font-bold text-slate-300 flex justify-center items-center gap-1 leading-4">
            EMS -
            <span className="font-normal text-[10px] rounded-xl bg-slate-800 px-2">
              {props.dashboardTitle}
            </span>
          </span>
        </div>
      </div>
      <nav>
        <Link
          className="flex items-center p-4 duration-200 text-slate-400 border-b border-slate-900"
          to="/"
        >
          <SlHome className="inline-block align-baseline" />
          <span className="mx-4 relative -bottom-[1px] leading-3">Home</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
