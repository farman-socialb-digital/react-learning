import React, { useCallback, useState } from "react";
import Child from "./Child";

// use React.memo to prevent re-render unnecessarily of child-component
// if you are sending a function to child component then React.memo wont be able to save you from re—rendering

function UseCallbackComponent() {
  let [countOne, setCountOne] = useState(0);
  let [countTwo, setCountTwo] = useState(0);

  let increaseCount = () => {
    setCountOne(countOne + 1);
  }

  let fun = useCallback(() => {
    return (console.log("Function Passed"))
  }, [countTwo])

  return (
    <>
      <p>Count : {countOne}</p>
      <button
        className="bg-green-700 p-2 px-4 rounded-full my-3"
        onClick={increaseCount}
      >
        Count Increase
      </button>
      <Child name="Child Component" countTwo={countTwo} fun={fun} />
    </>
  );
}

export default UseCallbackComponent;
