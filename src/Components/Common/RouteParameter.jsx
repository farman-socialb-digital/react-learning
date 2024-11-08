import React from "react";
import { useParams } from "react-router-dom";

function RouteParameter() {
  let { id } = useParams();
  return (
    <>
      <div className="max-w-[550px] m-auto text-center border border-slate-700 overflow-hidden rounded-xl mb-8">
      <p className="font-medium py-3 text-slate-400 bg-slate-800">Route Parameter (useParams)</p>
        <div className="font-bold text-green-700 m-4">{id}</div>
      </div>
    </>
  );
}

export default RouteParameter;
