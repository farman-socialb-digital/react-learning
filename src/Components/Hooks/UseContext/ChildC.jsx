import React, { useContext } from "react";
import { UserContext } from "./UseContextComponent";
import { RollContext } from "./UseContextComponent";

function ChildC() {
  const user = useContext(UserContext);
  const roll = useContext(RollContext);
  return (
    <div className="max-w-[550px] m-auto text-center border border-slate-700 overflow-hidden rounded-xl mb-8">
      <p className="font-medium py-3 text-slate-400 bg-slate-800">useContext</p>
      <div className="m-4 text-slate-400 text-center">
        User: {user}
        <br />
        Roll: {roll}
      </div>
    </div>
  );
}

export default ChildC;
