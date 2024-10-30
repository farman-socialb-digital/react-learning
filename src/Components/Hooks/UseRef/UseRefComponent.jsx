import React, { useEffect, useRef, useState } from "react";

// useRef component re-render pr value persist(barqarar) rakhta hy
// useRef value change pr component re-render nhi krta
// Directly access any element in DOM

function UseRefComponent() {
  {/* let [count, setCount] = useState(1);

  let val = useRef(0);

  let increaseCount = () => {
    setCount(count + 1);
  };
  val.current = val.current + 1;
  console.log("Value of Count:", count);
  console.log("Value of val", val.current);

  useEffect(() => {
    console.log("Run on every render");
  });

  let btnRef = useRef();

  let changeColor = () => btnRef.current.style.backgroundColor = "rgb(185 28 28)" */}
  

  let [time, setTime] = useState(0);
  let timeRef = useRef(null)

  function startTimer() {
    if (time === 0) {
    timeRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }
  }
  function stopTimer() {
    clearInterval(timeRef.current)
    timeRef.current = null
  }
  function resetTimer() {
    stopTimer()
    setTime(0)
  }

  return (
    <div>
      <div className="max-w-[550px] m-auto border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">Stopwatch</p>
        <div className="text-gray-400 p-4">{time} Sec</div>
        <div className="mb-4 flex justify-center gap-3">
          <button
            className="bg-gray-700 p-2 px-4 rounded-full text-gray-300 cursor-pointer"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="bg-gray-700 p-2 px-4 rounded-full text-gray-300 cursor-pointer"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            className="bg-gray-700 p-2 px-4 rounded-full text-gray-300 cursor-pointer"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>

      {/* <button
        className="bg-green-700 p-2 px-4 rounded-full text-gray-300 cursor-pointer mb-4"
        ref={btnRef}
        onClick={increaseCount}
      >
        Increament
      </button>
      <p className="mb-4">{count}</p>
      <button
        className="bg-yellow-700 p-2 px-4 rounded-full text-gray-300 cursor-pointer mb-4"
        onClick={changeColor}
      >
        Change color 1st Button
      </button> */}
    </div>
  );
}

export default UseRefComponent;
