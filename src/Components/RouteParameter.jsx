import React from "react";
import { useParams } from "react-router-dom";

function RouteParameter() {
  let { id } = useParams();
  return (
    <>
      <div className="max-w-[600px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl p-5 text-xl mb-10">
        Params: ( <span className="font-bold text-green-400">{id} )</span>
      </div>
    </>
  );
}

export default RouteParameter;
