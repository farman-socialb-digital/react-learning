import React from "react";

function Counter(props) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 pt-3 mb-8">
      <p className="mb-3 font-bold text-xl text-gray-400">{props.children}</p>
      <div className="flex justify-center gap-2">
        <button
          className="bg-red-900 p-2 px-4 w-[100px] rounded-full"
          onClick={props.decreaseCount}
        >
          Minus
        </button>
        <button
          className="bg-green-900 p-2 px-4 w-[100px] rounded-full"
          onClick={props.increaseCount}
        >
          Plus
        </button>
      </div>
    </div>
  );
}

export default Counter;
