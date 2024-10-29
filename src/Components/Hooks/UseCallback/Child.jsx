import React, { memo } from "react";

// use React.memo to prevent re-render unnecessarily of child-component
// if you are sending a function to child component then React.memo wont be able to save you from re—rendering

function Child(props) {
  let reRender = console.log("Re-render child component");
  return (
    <>
      <div>{reRender}</div>
      <button
        className="bg-green-700 p-2 px-4 rounded-full my-3"
        onClick={props.fun}
      >
        {props.name}
      </button>
    </>
  );
}

export default memo(Child);
