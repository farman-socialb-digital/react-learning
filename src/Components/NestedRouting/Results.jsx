import React from "react";
import { Link } from "react-router-dom";

function Results() {
  return (
    <>
      <div className="max-w-[550px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">Results</p>
        <div className="m-4 my-5 flex flex-wrap gap-4 justify-center text-gray-400">
          Lorem ipsum dolor nesciunt sit amet consectetur adipisicing elit. Nisi at ex
          possimus porro atque enim expedita, qui alias quod nulla animi dolore
          ab. Ab corrupti ratione debitis quae nesciunt exercitationem.
        </div>
      </div>
      <Link
        to="../"
        className="border border-gray-600 p-2 px-4 rounded-full text-gray-400"
      >
        Back
      </Link>
    </>
  );
}

export default Results;
