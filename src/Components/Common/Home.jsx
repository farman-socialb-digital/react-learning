import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigateBasicReact = useNavigate();
  function navigatePageBasicReact() {
    navigateBasicReact("/basic-react");
  }
  return (
    <>
      <div className="max-w-[550px] m-auto text-center border border-slate-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-slate-400 bg-slate-800">
          Whats we learn in the Routing
        </p>
        <ul className="m-4 text-left text-slate-400">
          <li className="list-disc list-inside hover:text-slate-300 my-1">Basic Routing</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">Use of Link Tag</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">Use of NavLink Tag</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">NavLink Tag active class</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">Route parameter with useParams Hook ( Dynamic Routing )</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">Use of useNavigation</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">Nested Routing</li>
          <li className="list-disc list-inside hover:text-slate-300 my-1">404 Page</li>
        </ul>
      </div>
      <button
        className="border border-slate-600 p-2 px-4 rounded-full text-slate-400"
        onClick={navigatePageBasicReact}
      >
        Go to Basic React
      </button>
    </>
  );
}

export default Home;
