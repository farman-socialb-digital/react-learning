import React from "react";
import { Link } from "react-router-dom";

function Exam() {
  return (
    <>
      <div className="max-w-[550px] m-auto text-center border border-slate-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-slate-400 bg-slate-800">Exam</p>
        <div className="m-4 my-5 flex flex-wrap gap-4 justify-center text-slate-400">
          Lorem ipsum dolor sit nesciunt amet consectetur adipisicing elit. Nisi at ex
          possimus porro atque enim expedita, qui alias quod nulla animi dolore
          ab. Ab corrupti ratione debitis quae nesciunt exercitationem.
        </div>
      </div>
      <Link
        to="../"
        className="border border-slate-600 p-2 px-4 rounded-full text-slate-400"
      >
        Back
      </Link>
    </>
  );
}

export default Exam;
