import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigateBasicReact = useNavigate();
  function navigatePageBasicReact() {
    navigateBasicReact("/basic-react");
  }
  return (
    <>
      <div className="max-w-[500px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">
          Whats we learn in the Routing
        </p>
        <ul className="m-4 text-left text-gray-400">
          <li className="list-disc list-inside">Basic Routing</li>
          <li className="list-disc list-inside">Use of Link Tag</li>
          <li className="list-disc list-inside">Use of NavLink Tag</li>
          <li className="list-disc list-inside">NavLink Tag active class</li>
          <li className="list-disc list-inside">
            Route parameter with useParams Hook ( Dynamic Routing )
          </li>
          <li className="list-disc list-inside">Use of useNavigation</li>
          <li className="list-disc list-inside">Nested Routing</li>
          <li className="list-disc list-inside">404 Page</li>
        </ul>
      </div>
      <button
        className="border border-gray-600 p-2 px-4 rounded-full text-gray-400"
        onClick={navigatePageBasicReact}
      >
        Go to Basic React
      </button>
    </>
  );
}

export default Home;
