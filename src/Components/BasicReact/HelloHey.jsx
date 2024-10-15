import React from "react";

function HelloHey(props) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 pt-3 mb-8">
      <p
        className={`mb-3 font-bold text-xl ${
          props.hello === true ? "text-red-400" : "text-green-400"
        }`}
      >
        {props.hello === true ? "Hello" : "Hey"}
      </p>
      <div className="flex justify-center gap-2">
        <button
          className={`${
            props.hello === true ? "bg-red-700" : "bg-green-700"
          } p-2 px-4 rounded-full`}
          onClick={props.changeHelloHey}
        >
          {props.hello === true ? "Say click to Hey" : "Say click to Hello"}
        </button>
      </div>
    </div>
  );
}

export default HelloHey;
