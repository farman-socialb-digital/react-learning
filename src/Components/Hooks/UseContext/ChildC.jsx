import React, { useContext } from "react";
import { UserContext } from "./useContextComponent";
import { RollContext } from "./useContextComponent";

function ChildC() {
  const user = useContext(UserContext);
  const roll = useContext(RollContext);
  return (
    <div>
      <div className="max-w-[550px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">useContext</p>
        <div className="m-4 text-left text-gray-400 text-center">
          User: {user}
          <br />
          Roll: {roll}
        </div>
      </div>
    </div>
  );
}

export default ChildC;
