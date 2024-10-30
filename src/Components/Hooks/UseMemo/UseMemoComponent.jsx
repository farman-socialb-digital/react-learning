import React, { useMemo, useState } from "react";

function UseMemoComponent() {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState(0);
  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <>
      <button
        className="bg-green-700 p-2 px-4 rounded-full"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <div className="my-3">Count is : {count}</div>
      <input
        type="number"
        className="rounded-full p-3 px-5 w-full bg-gray-800 outline-none text-gray-350 m-auto max-w-[300px] text-center"
        placeholder="Enter number"
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default UseMemoComponent;
