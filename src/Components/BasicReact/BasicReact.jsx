import React, { useState } from "react";

import InputField from "./InputField";
import Counter from "./Counter";
import HelloHey from "./HelloHey";
import { useNavigate } from "react-router-dom";

function BasicReact() {
  let navigateHome = useNavigate();
  function navigatePageHome() {
    navigateHome("/");
  }

  let [inputText, setInputText] = useState("Type anything in input field");
  let inputTextUpdate = (e) => {
    let inputTextNewVal = e.target.value;
    setInputText(inputTextNewVal);
  };

  let [count, setCount] = useState(0);

  let increaseCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  let decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let [hello, hey] = useState(true);

  let changeHelloHey = () => {
    hey(!hello);
  };

  return (
    <>
      <div className="max-w-[450px] m-auto">
        <InputField inputText={inputText} inputTextUpdate={inputTextUpdate} />
        <Counter increaseCount={increaseCount} decreaseCount={decreaseCount}>
          {count}
        </Counter>
        <HelloHey hello={hello} changeHelloHey={changeHelloHey} />
      </div>
      <button
        className="border border-gray-600 p-2 px-4 rounded-full text-gray-400"
        onClick={navigatePageHome}
      >
        Go to Home
      </button>
    </>
  );
}

export default BasicReact;
